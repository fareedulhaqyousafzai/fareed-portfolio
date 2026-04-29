// Select the toggle button
const toggleButton = document.getElementById("theme");

// Listen for a click on the button
toggleButton.addEventListener("click", function () {
  // Toggle the dark-mode class on the body
  document.body.classList.toggle("light-mode");

  const isLightMode = document.body.classList.contains("light-mode");
  
  if (isLightMode) {
    document.documentElement.style.setProperty("--body", "#fff");
    document.documentElement.style.setProperty("--font-color", "#1c354f");
  } else {
    document.documentElement.style.setProperty("--body", "#1c354f");
    document.documentElement.style.setProperty("--font-color", "#fff");
  }

  // Save the user's preference in localStorage
  localStorage.setItem("lightMode", isLightMode);
});

// Text Effect
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



  $(document).ready(function () {
  $("#toggle_button").click(function () {
    // Ye aapka purana code hai jo menu ko kholta/band karta hai
    $("nav ul").slideToggle(300);

    // 🔥 NAYA JADOO: Ye line 3-lines aur X icon ko aapas mein badlegi 🔥
    $(this).toggleClass("fa-bars fa-xmark");
  });
});
