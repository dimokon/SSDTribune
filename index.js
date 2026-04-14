const darkModeToggle = document.getElementById("toggle");
const menuToggle = document.getElementById("menu-toggle");
const navCapsule = document.querySelector(".nav-capsule");

darkModeToggle.onclick = function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    darkModeToggle.textContent = "🌙";
  } else {
    darkModeToggle.textContent = "☀️";
  }
};

if (menuToggle && navCapsule) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navCapsule.classList.toggle("nav-open");
    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const sliderContent = [
  {
    id: 1,
    title: "Slider number 1",
    description: "Meeting held to discuss civil bloc outcomes",
    link: "https:/www.google.com",
    linkText: "Read more",
    image: "./images/meeting.jpeg",
  },
  {
    id: 2,
    title: "Slider number 2",
    description:
      "What does Dr. John Garang think about the current situation in Sudan?",
    link: "https:/www.x.com",
    linkText: "Read more",
    image: "./images/garang.jpg",
  },
];

const sliderContainer = document.querySelector("#slider-container");
const sliderSection = document.querySelector(".slider-container");
const prevButton = document.getElementById("prev-slide");
const nextButton = document.getElementById("next-slide");
const sliderIntervalDelay = 3000;
let sliderInterval = null;

function createSliderItem(index) {
  const slider = sliderContent[index];
  const sliderItem = document.createElement("div");
  sliderItem.innerHTML = `
    <img src="${slider.image}" alt="${slider.title}">
    <h2>${slider.title}</h2>
    <p>${slider.description}</p>
    <a href="${slider.link}">${slider.linkText}</a>
  `;
  sliderContainer.innerHTML = "";
  sliderContainer.appendChild(sliderItem);
}

function nextSliderItem() {
  currentIndex = (currentIndex + 1) % sliderContent.length;
  createSliderItem(currentIndex);
}

function prevSliderItem() {
  currentIndex =
    (currentIndex - 1 + sliderContent.length) % sliderContent.length;
  createSliderItem(currentIndex);
}

function startSliderTimer() {
  stopSliderTimer();
  sliderInterval = setInterval(nextSliderItem, sliderIntervalDelay);
}

function stopSliderTimer() {
  if (sliderInterval) {
    clearInterval(sliderInterval);
    sliderInterval = null;
  }
}

let currentIndex = 0;
createSliderItem(currentIndex);
startSliderTimer();

prevButton.addEventListener("click", () => {
  prevSliderItem();
  startSliderTimer();
});

nextButton.addEventListener("click", () => {
  nextSliderItem();
  startSliderTimer();
});

sliderSection.addEventListener("mouseenter", stopSliderTimer);
sliderSection.addEventListener("mouseleave", startSliderTimer);
