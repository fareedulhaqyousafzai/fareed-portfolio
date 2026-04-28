// Select the toggle button
const toggleButton = document.getElementById("theme");

// Listen for a click on the button
toggleButton.addEventListener("click", function () {
  // Toggle the dark-mode class on the body
  document.body.classList.toggle("light-mode");

  // Optionally, save the user's preference in localStorage or a cookie
  // Example using localStorage:
  const isLightMode = document.body.classList.contains("light-mode");
  if (isLightMode) {
    document.documentElement.style.setProperty("--body", "#fff");
    document.documentElement.style.setProperty("--font-color", "#1c354f");
  } else {
    document.documentElement.style.setProperty("--body", "#1c354f");
    document.documentElement.style.setProperty("--font-color", "#fff");
  }

  // Optionally, save the user's preference in localStorage
  localStorage.setItem("darkMode", isDarkMode);
});

//text efec
let i = 0;
const text = "Front-End Developer!";
const typing = function () {
  if (i < text.length) {
    document.querySelector(".textEffect").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 150);
  }
  if (i === text.length) {
    document.querySelector(".last").innerHTML = "";
  }
};
typing();

$(document).ready(function () {
  $("#toggle_button").click(function () {
    $("nav ul").slideToggle(); 
  });
});

// const cards = document.querySelectorAll(".project-card");

// cards.forEach(card => {
//   card.addEventListener("mousemove", (e) => {
//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;

//     const rotateX = ((y - centerY) / centerY) * 8;
//     const rotateY = ((x - centerX) / centerX) * -8;

//     card.style.transform =
//       `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-18px)`;
//   });

//   card.addEventListener("mouseleave", () => {
//     card.style.transform = "rotateX(0) rotateY(0) translateY(0)";
//   });
// });
