import { useEffect } from "react";
import Hero from "./sections/Hero";
// import OurProduct from "./sections/our-products/OurProduct"
import MarqueeSlider from "./sections/MarqueeSlider";

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <ReactLenis root>
      <Hero />
      <MarqueeSlider/>
      {/* <OurProduct/> */}
    </>
  );
}

export default App;
