const isAuthenticated = (req, res, next) => {
  if (!req.user) {
    res.status(401).send("Unauthorized");
    return;
  }

  next();
};

module.exports = isAuthenticated;
