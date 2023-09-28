const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const User = require("./models/user.js");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, onAuthComplete) => {
      try {
        // check for an existing user in db
        let user = await User.findOne({ googleId: profile.id });
        console.log(user);

        // if user not find in db then create one
        if (!user) {
          user = new User({
            googleId: profile.id,
            displayName: profile.displayName,
            avatar: profile.photos[0].value,
            email: profile.emails[0].value,
          });
          await user.save();
        }

        onAuthComplete(null, user);
      } catch (error) {
        onAuthComplete(error, null);
      }
    }
  )
);

passport.serializeUser(async (user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
