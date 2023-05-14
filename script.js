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

  // Check if the page is index.html
  if (window.location.pathname.endsWith('index.html')) {
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




