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
    $("nav ul").toggle();
  });
});

// Button aur Menu ko select karein
const toggleButton = document.getElementById('toggle_button');
const navMenu = document.querySelector('nav ul');

if (toggleButton && navMenu) {
    toggleButton.addEventListener('click', function(event) {
        // Yeh line mobile browser ko confuse hone se rokti hai
        event.preventDefault(); 
        event.stopPropagation();
        
        // Menu par 'show-menu' naam ki class lagayega aur hatayega
        navMenu.classList.toggle('show-menu'); 
    });

    // BONUS: Agar user screen pe kahin aur click kare tou menu khud band ho jaye
    document.addEventListener('click', function(event) {
        if (!toggleButton.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('show-menu');
        }
    });
}
