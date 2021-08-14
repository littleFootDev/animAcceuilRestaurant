window.addEventListener("load", loader);

function loader() {
  const TLLOAD = gsap.timeline();

  TLLOAD.to(".images-container", {
    height: 400,
    durations: 1.3,
    delay: 0.4,
  })
    .to(".bloc-txt", { height: "auto", durations: 0.6 }, "-=.8")
    .to(".bloc-txt h2", { y: 0 }, "-=.6")
    .to(".f2", { y: 0, duration: 0.6 })
    .to(".flip-img1", { display: "none", duration: 0 })
    .to(".f2", { y: "-100%" })
    .to(".load-container", { autoAlpha: 0, duration: 0.8, delay: 0.7 })
    .add(() => {
      document.querySelector("video").play();
    }, "-=.8");
}
