import { useEffect } from "react";
import Hero from "./sections/Hero";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <ReactLenis root>
      <Hero />
    </ReactLenis>
  );
}

export default App;
