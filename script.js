// Open and close the menu on mobile
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("open");
});

// Fade in sections while scrolling
const sections = document.querySelectorAll("section");

for (let i = 0; i < sections.length; i++) {
  sections[i].classList.add("hidden");
}

function checkSections() {
  for (let i = 0; i < sections.length; i++) {
    const top = sections[i].getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sections[i].classList.add("visible");
    }
  }
}

window.addEventListener("scroll", checkSections);
checkSections();