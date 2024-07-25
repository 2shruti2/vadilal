import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import ScreenLoader from "./components/ScreenLoader";
import Hero from "./sections/Hero";
import MarqueeSlider from "./sections/MarqueeSlider";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "./components/Footer";
import Waah from "./sections/Waah";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 4200);
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
        <main >
          <Navbar logo={"assets/vadial logo.webp"}/>
          <Hero   /> 
          <MarqueeSlider />
          <Waah/>      
          <Footer/>
        </main>
      )}
    </>
  );
}

export default App;
