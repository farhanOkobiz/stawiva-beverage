import Product from "../components/home/Product";
import Banner from "../components/home/Banner";
import NewsEventsForHome from "./NewsEventsForHome";
import VisionMissionValues from "../components/home/VisionMissionValues";
import MDQuote from "../components/home/MDQuote";

const Home = () => {
  return (
    <>
      <Banner />
      <VisionMissionValues />
      <Product />
      <MDQuote/>
      <NewsEventsForHome/>
      {/* <Event /> */}
      {/* <Partner /> */}
    </>
  );
};

export default Home;
