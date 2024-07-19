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
      <div className="banner h-screen w-full text-center overflow-hidden relative my-4">
        <div className="slider " >
        <div className="content">
          <div className="model"></div>
          {/* <img src="/assets/file.png" alt="" /> */}
        </div>
          <div className="item item1 " >
            {" "}
            <img
              src="https://images.unsplash.com/photo-1564410267841-915d8e4d71ea?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdGl2YXRpb25hbHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <div className="item  item2" >
            {" "}
            <img
              src="https://images.unsplash.com/photo-1564410267841-915d8e4d71ea?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdGl2YXRpb25hbHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <div className="item item3 " >
            {" "}
            <img
              src="https://images.unsplash.com/photo-1564410267841-915d8e4d71ea?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdGl2YXRpb25hbHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <div className="item  item4" >
            {" "}
            <img
              src="https://images.unsplash.com/photo-1564410267841-915d8e4d71ea?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdGl2YXRpb25hbHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <div className="item item5 " >
            {" "}
            <img
              src="https://images.unsplash.com/photo-1564410267841-915d8e4d71ea?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdGl2YXRpb25hbHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <div className="item  item6" >
            {" "}
            <img
              src="https://images.unsplash.com/photo-1564410267841-915d8e4d71ea?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdGl2YXRpb25hbHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
        </div>
        
      </div>
      <div className="animate h-screen flex items-center justify-center my-4">
        <div className="dabobaRotate"></div>
        <div className="circle">
          
          <span className="l1">r</span>
          <span className="l2">o</span>
          <span className="l3">a</span>
          <span className="l4">t</span>
          <span className="l5">t</span>
          <span className="l6">i</span>
          <span className="l7">n</span>
          <span className="l8">g</span>
          <span className="l9">-</span>
          <span className="l10">t</span>
          <span className="l11">e</span>
          <span className="l12">x</span>
          <span className="l13">t</span>
          <span className="l14">-</span>
          <span className="l15">a</span>
          <span className="l16">r</span>
          <span className="l17">o</span>
          <span className="l18">u</span>
          <span className="l19">n</span>
          <span className="l20">d</span>
          <span className="l21">-</span>
          <span className="l22">t</span>
          <span className="l23">h</span>
          <span className="l24">e</span>
          <span className="l25">-</span>
          <span className="l26">e</span>
          <span className="l27">a</span>
          <span className="l28">r</span>
          <span className="l29">t</span>
          <span className="l30 ">h</span>
                  </div>
      </div>
      <div className="h-screen bg-primary my-4"></div>
      <div className="h-screen bg-primary my-4"></div>
    </ReactLenis>
  );
}

export default App;
