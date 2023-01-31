let slide = 1;
showSlides(slide);

// Next/previous controls
function plusSlides(n) {
  showSlides(slide += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slide = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slide = 1}
  if (n < 1) {slide = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  slides[slide-1].style.display = "block";
  // dots[slide-1].className += " active";
}

function myFunction(content) {
 document.getElementById(content).scrollIntoView(); 
}