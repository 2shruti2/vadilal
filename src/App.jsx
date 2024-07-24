import { useEffect, useState } from "react";
import ScreenLoader from "./components/ScreenLoader";
import Hero from "./sections/Hero";
import MarqueeSlider from "./sections/MarqueeSlider";
// import OurProduct from "./sections/our-products/OurProduct"
function App() {
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
          <Hero />
          <MarqueeSlider />
          {/* <OurProduct /> */}
        </>
      )}
    </>
  );
}

export default App;
