

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
  
  // 1. Hamburger Icon par click karne ka code (Jo pehle se tha)
  $("#toggle_button").click(function () {
    $("nav ul").slideToggle(300);
    $(this).toggleClass("fa-bars fa-xmark");
  });

  // 2. 🔥 NAYA JADOO: Kisi bhi Menu Link par click karne se menu khud band ho jaye 🔥
  $("nav ul li a").click(function () {
    // Ye check karega ke kya hum mobile screen par hain (yani hamburger button nazar aa raha hai)
    if ($("#toggle_button").is(":visible")) {
      $("nav ul").slideUp(300); // Menu ko wapas upar slide kar ke band kar dega
      $("#toggle_button").removeClass("fa-xmark").addClass("fa-bars"); // 'X' ko hata kar wapas 3-lines le aayega
    }
  });

});
