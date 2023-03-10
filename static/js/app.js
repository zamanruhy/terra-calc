const main = "";
const Button = "";
const Contact = "";
const Extra = "";
const Intro = "";
const Norms = "";
const Parts = "";
const Reasons = "";
const Advantages = "";
const Examples = "";
const Advices = "";
(() => {
  const el = document.querySelector(".lc-parts");
  const prevEl = el.querySelector(".lc-parts__prev");
  const nextEl = el.querySelector(".lc-parts__next");
  const containerEl = el.querySelector(".lc-parts__container");
  const itemEls = Array.from(el.querySelectorAll(".lc-parts__item"));
  const itemWidth = itemEls[0].offsetWidth;
  let offsetWidth = containerEl.offsetWidth;
  let scrollWidth = containerEl.scrollWidth;
  let index = 0;
  function onScroll() {
    console.log(containerEl.scrollLeft === scrollWidth - offsetWidth);
    if (containerEl.scrollLeft === 0)
      el.classList.add("lc-parts_start");
    else
      el.classList.remove("lc-parts_start");
    if (containerEl.scrollLeft === scrollWidth - offsetWidth)
      el.classList.add("lc-parts_end");
    else
      el.classList.remove("lc-parts_end");
  }
  function changeIndex(dir = 1) {
    index = Math.min(
      Math.max(0, index + dir),
      Math.ceil((scrollWidth - offsetWidth) / itemWidth)
    );
    return index;
  }
  containerEl.addEventListener("scroll", onScroll);
  nextEl.addEventListener("click", () => {
    containerEl.scrollLeft = 243 * changeIndex(1);
  });
  prevEl.addEventListener("click", () => {
    containerEl.scrollLeft = 243 * changeIndex(-1);
  });
})();
