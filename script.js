const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
  menuBtn.innerHTML = mobileNav.classList.contains("open")
    ? 'CLOSE <span>×</span>'
    : 'MENU <span>☰</span>';
});

document.querySelectorAll(".mobile-nav a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuBtn.innerHTML = 'MENU <span>☰</span>';
  });
});

function submitForm(event) {
  event.preventDefault();
  alert("Thank you! Your tour request has been received.");
  event.target.reset();
  return false;
}
