import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ImageAnimation from "./ImageAnimation";

const About = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: false });
    gsap.set(".image-animation", {
      scale: 0,
      bottom: 0,
      left: 0,
      transformOrigin: "bottom left",
    });
    tl.to(
      ".image-animation",
      {
        top: 0,
        right: 0,
        left: "unset",
        scale: 1,
        transformOrigin: "bottom left",
        duration: 1.5,
      }
    );
    tl.to(
      ".image-animation",
      {
        scale: 0,
        top: 0,
        right: 0,
        transformOrigin: "top right",
        duration: 1.5,
      },
      "-=0.6"
    );
  });

  return (
    <section className="about-section h-screen w-full relative bg-red-200 flex justify-center items-center">
      <div className="relative border-2 border-black h-[400px] w-[400px]">
        <ImageAnimation />
      </div>
    </section>
  );
};

export default About;
