import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import bg from "../assets/bg.jpg";
import boy from "../assets/boy.png";
import boy3 from "../assets/boy-3.png";
import girl from "../assets/girl.png";
import girl2 from "../assets/girl-2.png";
import girl4 from "../assets/girl-4.png";
import girl5 from "../assets/girl-5.png";

function Image3DV2() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".image-3d",
        pin: true,
        scrub: 1,
        start: "top top",
        end: "bottom -100%",
        markers: false,
      },
    });
    tl.to(".bg", {
      scaleY: 0,
      transformOrigin: "center center",
    });
    tl.to(
      ".girl",
      {
        bottom: "47%",
      },
      "-=0.50"
    );
    tl.to(
      ".girl4",
      {
        bottom: "48%",
        height: "200px",
        zIndex: 1,
      },
      "-=0.50"
    );
    tl.to(
      ".girl2",
      {
        bottom: "49%",
      },
      "-=0.50"
    );
    tl.to(
      ".girl5",
      {
        top: "27%",
        height: "170px",
      },
      "-=0.50"
    );
    tl.to(
      ".boy",
      {
        bottom: "48%",
      },
      "-=0.50"
    );
    tl.to(
      ".boy2",
      {
        top: "28%",
        height: "160px",
      },
      "-=0.50"
    );
    tl.to(
      ".image-3d-img",
      {
        y: 120,
        scale: 2,
        transformOrigin: "center center",
      },
      "+=0.10"
    );
  });

  return (
    <div className="flex image-3d h-screen justify-center items-center bg-amber-50">
      <div className="image-3d-img hidden lg:flex h-auto w-auto relative">
        <img className="bg h-[700px] w-auto object-fill" src={bg} alt="" />
        <img
          className="girl absolute w-auto h-[200px] object-contain bottom-[210px] left-[-60px]"
          src={girl}
          alt=""
        />
        <img
          className="girl2 absolute w-auto h-[167px] object-contain bottom-[220px] left-[49%]"
          src={girl2}
          alt=""
        />
        <img
          className="girl4 absolute w-auto h-[230px] object-contain bottom-[-10px] left-[34.5%]"
          src={girl4}
          alt=""
        />
        <img
          className="girl5 absolute w-auto h-[140px] object-contain top-[40px] right-[20px]"
          src={girl5}
          alt=""
        />
        <img
          className="boy2 absolute w-auto h-[140px] object-contain top-[100px] right-[-30px]"
          src={boy}
          alt=""
        />
        <img
          className="boy absolute w-auto h-[170px] object-contain bottom-[250px] left-[25%]"
          src={boy3}
          alt=""
        />
      </div>
      <div className="block lg:hidden">
        <h1 className="text-4xl text-center">Please switch to desktop for better experience!</h1>
      </div>
    </div>
  );
}

export default Image3DV2;
