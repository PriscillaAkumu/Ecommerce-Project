import "./Home.css";
import Hero from "./Hero";
import FeatProducts from "./FeatProducts";
import TopPicks from "./TopPicks";
import NewArrival from "./NewArrival";
import OurBlogs from "./OurBlogs";
import OurInstagram from "./OurInstagram";
import Navbar from './AppBar';
const Home = () => {
  return (
    <>
    <Navbar/>
      <Hero />
      <FeatProducts />
      <TopPicks />
      <NewArrival />
      <OurBlogs />
      <OurInstagram />
    </>
  );
};

export default Home;
