const yearElement = document.querySelector(".footer p");

if (yearElement) {
  yearElement.innerHTML = yearElement.innerHTML.replace("2026", new Date().getFullYear());
}
