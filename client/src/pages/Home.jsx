import { Header, Footer, Main, Gallery } from "../components/Home/index";

const Home = (userDetails) => {
  const user = userDetails.user;
  return (
    <>
      <Header user={user} />
      <Main user={user} />
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;
