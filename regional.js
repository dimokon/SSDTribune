const menuToggle = document.getElementById("menu-toggle");
const navCapsule = document.querySelector(".nav-capsule");

if (menuToggle && navCapsule) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navCapsule.classList.toggle("nav-open");
    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

