// Theme Toggle Logic
const toggleButton = document.getElementById("theme");

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
  const isLightMode = document.body.classList.contains("light-mode");
  
  if (isLightMode) {
    document.documentElement.style.setProperty("--body", "#fff");
    document.documentElement.style.setProperty("--font-color", "#1c354f");
  } else {
    document.documentElement.style.setProperty("--body", "#1c354f");
    document.documentElement.style.setProperty("--font-color", "#fff");
  }

  // Save preference
  localStorage.setItem("lightMode", isLightMode);
});

// Typing Text Effect
let i = 0;
const text = "Front-End Developer!";
const typing = function () {
  if (i < text.length) {
    document.querySelector(".textEffect").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 150);
  } else {
    document.querySelector(".last").innerHTML = "";
  }
};
typing();

// Mobile Menu Toggle (Vanilla JS)
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("toggle_button");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll("nav ul li a");

  // Open/Close menu when clicking hamburger
  hamburgerBtn.addEventListener("click", function () {
    navMenu.classList.toggle("nav-active");
    
    if (hamburgerBtn.classList.contains("fa-bars")) {
      hamburgerBtn.classList.replace("fa-bars", "fa-xmark");
    } else {
      hamburgerBtn.classList.replace("fa-xmark", "fa-bars");
    }
  });

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      if (window.getComputedStyle(hamburgerBtn).display !== "none") {
        navMenu.classList.remove("nav-active");
        hamburgerBtn.classList.replace("fa-xmark", "fa-bars");
      }
    });
  });
});
