
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
// import OurProduct from "./sections/our-products/OurProduct"
import MarqueeSlider from "./sections/MarqueeSlider";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
    <Navbar />
      <Hero />
      <MarqueeSlider/>
      {/* <OurProduct/> */}
    </>
  );
}

export default App;
