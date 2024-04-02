const slider = tns({
  container: ".slider",

  items: 2.7,
  gutter: 10,
  mouseDrag: true,
  speed: 400,
  loop: false,

  autoWidth: true,
  autoHeight: true,

  controlsContainer: ".locations__controls",
  nav: false,
  lazyload: true,
});

const prevMobile = document.querySelector(".locations__controls--mobile .prev");
const nextMobile = document.querySelector(".locations__controls--mobile .next");

prevMobile.onclick = function () {
  slider.goTo("prev");
};

nextMobile.onclick = function () {
  slider.goTo("next");
};
