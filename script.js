// JavaScript for image slideshow
var slideIndex = 0;
var slides = document.getElementsByClassName("slide");

function showSlides() {
  // Hide all slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Increment slide index
  slideIndex++;

  // Reset slide index if it exceeds the number of slides
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Display the current slide
  slides[slideIndex - 1].style.display = "block";

  // Set the timeout for the next slide
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Call the showSlides function to start the slideshow
showSlides();

window.addEventListener('DOMContentLoaded', function() {
  var footer = document.querySelector('footer');
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  var bodyHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

  // Check if the page is index.html or index-cs.html
  if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('index-cs.html')) {
    // Check if scroll position is at the bottom of the page
    if (scrollPosition + windowHeight >= bodyHeight) {
      footer.style.display = 'block'; // Show the footer
    } else {
      footer.style.display = 'none'; // Hide the footer
    }

    window.addEventListener('scroll', function() {
      scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      // Check if scroll position is at the bottom of the page
      if (scrollPosition + windowHeight >= bodyHeight) {
        footer.style.display = 'block'; // Show the footer
      } else {
        footer.style.display = 'none'; // Hide the footer
      }
    });
  } else {
    footer.style.display = 'block'; // Show the footer for subpages
  }
});
// Language switch
  document.addEventListener("DOMContentLoaded", function() {
    var languageSwitch = document.getElementById("language-switch");
    var englishLink = document.getElementById("english-link");
    var czechLink = document.getElementById("czech-link");

    // Set initial language based on the saved preference (if any)
    var languagePreference = localStorage.getItem("languagePreference");
    if (languagePreference === "czech") {
      switchToCzech();
    } else {
      switchToEnglish();
    }

    // Event listeners for language links
    englishLink.addEventListener("click", switchToEnglish);
    czechLink.addEventListener("click", switchToCzech);

    // Function to switch to English language
    function switchToEnglish() {
      document.documentElement.lang = "en";
      languageSwitch.classList.remove("czech-active");
      languageSwitch.classList.add("english-active");
      localStorage.setItem("languagePreference", "english");
    }

    // Function to switch to Czech language
    function switchToCzech() {
      document.documentElement.lang = "cs";
      languageSwitch.classList.remove("english-active");
      languageSwitch.classList.add("czech-active");
      localStorage.setItem("languagePreference", "czech");
    }
  });
