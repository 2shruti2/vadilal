import SparklesText from "@/components/magicui/sparkles-text";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const HorizontalSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
        background: "rgb(255,228,225)",
      },
      {
        translateX: "-150vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const color1 = "rgb(255,228,225)"; // Light Pink
            const color2 = "rgb(230,240,255)"; // Light Blue
            const color3 = "rgb(230,116,170)"; // Light Pastel Purple
            const blendedColor = gsap.utils.interpolate([color1, color2, color3], progress);
            gsap.to(sectionRef.current, { backgroundColor: blendedColor, duration: 0.1 });
          },
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer max-sm:hidden">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <h3 className="scroll-text px-40 text-orange-950 flex gap-60 items-center"><SparklesText className="text-9xl" text="Unlock the world full of indulgence." />
            <img src="/images/hero01.png" alt="ice cream" className="w-[30rem] hover:rotate-12 transition ease-in-out hover:animate-none delay-150 animate-updown" />
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalSection;




