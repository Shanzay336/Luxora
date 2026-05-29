const list = document.querySelector(".navlist");
const hamburger = document.querySelector(".hamburger");

if (hamburger && list) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    list.classList.toggle("navlist-active");
  });
}