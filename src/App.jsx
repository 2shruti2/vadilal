
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import ScreenLoader from "./components/ScreenLoader";
import Hero from "./sections/Hero";
// import OurProduct from "./sections/our-products/OurProduct"
import MarqueeSlider from "./sections/MarqueeSlider";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "./components/Footer";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {loading ? (
        <ScreenLoader />
      ) : (
        <>
          <Navbar logo={"assets/vadilal.jpeg"}/>
          {/* <Hero /> */}
          <MarqueeSlider />
          <div className="h-screen w-full bg-black"></div>
          <Footer/>
          {/* <OurProduct /> */}
        </>
      )}
    </>
  );
}

export default App;
