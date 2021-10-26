const trans = document.querySelectorAll(".transition");
const choice = document.querySelector(".choice");
const block = document.querySelectorAll(".block");

trans[0].addEventListener("click", () => {
  choice.style.display = "none";
  block[0].style.display = "flex";
});

trans[1].addEventListener("click", () => {
  choice.style.display = "none";
  block[1].style.display = "flex";
});
