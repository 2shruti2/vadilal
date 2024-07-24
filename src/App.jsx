import { useEffect, useState } from "react";
import ScreenLoader from "./components/ScreenLoader";
import Hero from "./sections/Hero";
import MarqueeSlider from "./sections/MarqueeSlider";
import Advertisements from "./sections/advertisements/Advertisemts"
import Products from "./sections/products/Products"
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
          {/* <Hero />
          <Advertisements />
          <MarqueeSlider />                    */}
          <Products />
        </>
      )}
    </>
  );
}

export default App;
