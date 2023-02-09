const scrolltp = document.querySelector("#scrolltp");
const li = document.getElementsByClassName("nav-list");
scrolltp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", function () {
  if (window.scrollY >= 700) {
    scrolltp.style.opacity = 1;
  }
  else {
    scrolltp.style.opacity = 0;
  }
});

if (darkmode) {
  body.classList.add("dark");
  themeToggle.checked = true;
}

themeToggle.addEventListener('change', function () {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("dark", "active");
  } else {
    localStorage.removeItem("dark");
  }
})
const video = document.querySelector("video");

video.addEventListener("play", () => {
  console.log("Video is playing!");
});

video.addEventListener("pause", () => {
  console.log("Video is paused.");
});
// quotes
// function createSuggestion() {
//   var choices = ["If you are broken, you do not have to stay broken.”", "Go through memories", "There is a crack in everything, that’s how the light gets in", "Video call your loved ones", "There is hope, even when your brain tells you there isn’t."];
//   const num = Math.floor(Math.random() * choices.length);
//   localStorage.setItem("suggestion", choices[num]);
//   var suggestion = localStorage.getItem("suggestion");
//   window.alert(suggestion);
// };

// window.onload = createSuggestion;