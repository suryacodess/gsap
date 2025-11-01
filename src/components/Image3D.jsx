import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import osaka from "../assets/osaka-cleaned.png";
import women from "../assets/women.png";
import menWomen from "../assets/men-women.png";
import kids from "../assets/kids.png";

function Image3D() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".image-3d",
        pin: true,
        scrub: 1,
        start: "top top",
        end: "bottom -100%",
        markers: true,
      },
    });
    tl.to(".bg", {
      scaleY: 0,
      transformOrigin: "center center",
    });
    // tl.to(".image-3d-img", {
    //   scaleY: 0,
    //   transformOrigin: "center center",
    // });
    
    tl.to(
      ".women-chatting",
      {
        bottom: "49%",
      },
      "-=0.50"
    );
    tl.to(
      ".men-women",
      {
        bottom: "42%",
      },
      "-=0.50"
    );
     tl.to(
      ".kids",
      {
        bottom: "48%",
      },
      "-=0.50"
    );
  });

  return (
    <div className="image-3d h-screen flex justify-center items-center bg-amber-50">
      <div className="image-3d-img relative">
        <img className="bg h-[700px] w-auto object-fill" src={osaka} alt="" />
        <img
          className="women-chatting absolute w-auto h-[180px] object-contain bottom-0 left-5"
          src={women}
          alt=""
        />
        <img
          className="men-women absolute w-[220px] h-auto bottom-5 left-[100px] brightness-50"
          src={menWomen}
          alt=""
        />
        <img
          className="kids absolute w-auto h-[100px] bottom-[30px] right-[100px] brightness-[60%]"
          src={kids}
          alt=""
        />
      </div>
    </div>
  );
}

export default Image3D;
