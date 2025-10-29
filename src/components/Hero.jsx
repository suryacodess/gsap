import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import sarah from "../assets/sarah-ful.jpg";
import sarahTransparent from "../assets/sarah.png";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {
  let tl;
  useGSAP(() => {
    tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        markers: false,
        start: "top top",
        end: "bottom -200%",
        scrub: 1,
        pin: true,
        onLeave: () => gsap.set(".content-top", { display: "none" }),
        onEnterBack: () => gsap.set(".content-top", { display: "block" }),
      },
    });

    const imgHeading = SplitText.create(".content-bottom-middle-heading", {
      type: "words, chars",
    });
    const sarahTransparentImgs = gsap.utils.toArray(".sarah-transparent");
    console.log(sarahTransparentImgs);

    sarahTransparentImgs.forEach((item, index) => {
      let customScale =
        sarahTransparentImgs.length + index - sarahTransparentImgs.length + 2;
      let convertedCustomScale = "0." + customScale.toString();
      console.log(convertedCustomScale);
      gsap.set(item, { scale: Number(convertedCustomScale) });
    });

    tl.to(".content-top", {
      autoAlpha: 0,
      height: 0,
      margin: 0,
      padding: 0,
      duration: 0.1,
    }).fromTo(
      ".content-bottom-middle",
      { borderRadius: 30 },
      {
        duration: 1,
        borderRadius: 0,
        width: "100vw",
        height: "100vh",
      }
    );
    tl.to(
      sarahTransparentImgs,
      {
        scale: 1,
        stagger: 0,
      },
      "=-0.8"
    );
    tl.fromTo(
      imgHeading.words,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        stagger: 0.2,
        duration: 0.2,
      },
      "=-0.5"
    );
  });

  useEffect(() => {
    document.addEventListener("resize", () => {
      tl.refresh();
    });
  }, []);
  return (
    <section className="hero-section w-full h-dvh flex justify-center items-center overflow-hidden relative">
      <div className="content">
        <div className="content-top">
          <h2 className="text-3xl md:text-5xl text-center">
            Real recommendations
          </h2>
        </div>
        <div className="content-bottom flex justify-center items-center gap-2">
          <div className="content-bottom-left">
            <h2 className="text-3xl md:text-5xl text-center text-nowrap">
              by real
            </h2>
          </div>
          <div className="content-bottom-middle h-0 w-0 relative flex justify-center items-center overflow-hidden">
            {/* <img
              className="h-full w-full object-cover"
              src="https://i.pinimg.com/1200x/98/38/1a/98381a30a1dbba24c8b54350ee7a43e8.jpg"
              alt="center image"
            /> */}
            <img
              className="h-full w-full object-cover"
              src={sarah}
              alt="center image"
            />
            <img
              src={sarahTransparent}
              className="sarah-transparent absolute z-[9] hidden md:block"
              alt=""
            />
            <img
              src={sarahTransparent}
              className="sarah-transparent absolute z-[9] hidden md:block"
              alt=""
            />
            <img
              src={sarahTransparent}
              className="sarah-transparent absolute z-[7] hidden md:block"
              alt=""
            />
            <img
              src={sarahTransparent}
              className="sarah-transparent absolute z-[6] hidden md:block"
              alt=""
            />
            <img
              src={sarahTransparent}
              className="sarah-transparent absolute z-[5] hidden md:block"
              alt=""
            />
            <img
              src={sarahTransparent}
              className="sarah-transparent absolute z-[4] hidden md:block"
              alt=""
            />
            <img
              src={sarahTransparent}
              className="sarah-transparent absolute z-[3] hidden md:block"
              alt=""
            />
            <img
              src={sarahTransparent}
              className="sarah-transparent absolute z-[2] hidden md:block"
              alt=""
            />
            <img
              src={sarahTransparent}
              className="sarah-transparent absolute z-[1] hidden md:block"
              alt=""
            />
            <div className="absolute z-[10] p-5 flex justify-center items-end md:items-center text-end md:text-center h-dvh w-full">
              <h1 className="text-white text-5xl content-bottom-middle-heading">
                Featuring curators around the world
              </h1>
            </div>
          </div>
          <div className="content-bottom-right">
            <h2 className="text-3xl md:text-5xl text-center text-nowrap">
              {" "}
              people
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
