import ReactDOM from "react-dom/client";
import App from "./App";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  smooth: 1,
  effects: true,
  smoothTouch: 0.1,
});
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <App />
    </div>
  </div>
);
