import { motion, useScroll, useTransform } from "framer-motion";

const MarqueeSlider = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [50, 0]);
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);

  return (
    <div data-scroll
    data-scroll-section
    data-scroll-speed="-.1" className="w-full py-7 sm:py-16 ">
      <motion.div
        style={{
          position: "relative",
        }}
      >
        <motion.h1
          className="text-center text-5xl text-primary mb-10 sm:mb-20"
          style={{ opacity, y }}
        >
          Every Bite, a Delight!
        </motion.h1>
      </motion.div>

      <div
        className="slider"
        style={{
          "--width": "100px",
          "--height": "50px",
          "--quantity": "10",
        }}
      >
        <div className="list">
          <div className="item" style={{ "--position": "1" }}>
            <img src="images/slider1_1.png" alt="" />
          </div>
          <div className="item" style={{ "--position": "2" }}>
            <img src="images/slider1_2.png" alt="" />
          </div>
          <div className="item" style={{ "--position": "3" }}>
            <img src="images/slider1_1.png" alt="" />
          </div>
          <div className="item" style={{ "--position": "4" }}>
            <img src="images/slider1_2.png" alt="" />
          </div>
          <div className="item" style={{ "--position": "5" }}>
            <img src="images/slider1_1.png" alt="" />
          </div>
          <div className="item" style={{ "--position": "6" }}>
            <img src="images/slider1_2.png" alt="" />
          </div>
          <div className="item" style={{ "--position": "7" }}>
            <img src="images/slider1_1.png" alt="" />
          </div>
          <div className="item" style={{ "--position": "8" }}>
            <img src="images/slider1_2.png" alt="" />
          </div>
          <div className="item" style={{ "--position": "9" }}>
            <img src="images/slider1_1.png" alt="" />
          </div>
          <div className="item" style={{ "--position": "10" }}>
            <img src="images/slider1_2.png" alt="" />
          </div>
        </div>
      </div>

      <div
        className="slider"
        data-reverse="true"
        style={{
          "--width": "20rem",
          "--height": "20rem",
          "--quantity": "9",
        }}
      >
        <div className="list">
          <div className="item hover:scale-110" style={{ "--position": "1" }}>
            <img src="images/slider2_1.jpg" alt="" />
          </div>
          <div className="item hover:scale-110" style={{ "--position": "2" }}>
            <img src="images/slider2_2.jpg" alt="" />
          </div>
          <div className="item hover:scale-110" style={{ "--position": "3" }}>
            <img src="images/slider2_3.jpg" alt="" />
          </div>
          <div className="item hover:scale-110" style={{ "--position": "4" }}>
            <img src="images/slider2_4.jpg" alt="" />
          </div>
          <div className="item hover:scale-110" style={{ "--position": "5" }}>
            <img src="images/slider2_5.jpg" alt="" />
          </div>
          <div className="item hover:scale-110" style={{ "--position": "6" }}>
            <img src="images/slider2_6.jpg" alt="" />
          </div>
          <div className="item hover:scale-110" style={{ "--position": "7" }}>
            <img src="images/slider2_7.jpg" alt="" />
          </div>
          <div className="item hover:scale-110" style={{ "--position": "8" }}>
            <img src="images/slider2_8.jpg" alt="" />
          </div>
          <div className="item hover:scale-110" style={{ "--position": "9" }}>
            <img src="images/slider2_9.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSlider;
