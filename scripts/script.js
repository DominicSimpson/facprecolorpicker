// Select all slides
const prevSlider = document.getElementById("prevSlider"); // gets image carousel sliders

const nextSlider = document.getElementById("nextSlider");

const dotOne = document.getElementById("dotOne"); // gets dot buttons
const dotTwo = document.getElementById("dotTwo");
const dotThree = document.getElementById("dotThree");
const dotFour = document.getElementById("dotFour");
const dotFive = document.getElementById("dotFive");
const dotSix = document.getElementById("dotSix");

const showDescription = document.getElementById("showDescription");
const showSecondDescription = document.getElementById("showSecondDescription");
const showThirdDescription = document.getElementById("showThirdDescription");
const showFourthDescription = document.getElementById("showFourthDescription");
const showFifthDescription = document.getElementById("showFifthDescription");
const showSixthDescription = document.getElementById("showSixthDescription");
const showSeventhDescription = document.getElementById("showSeventhDescription");
const showEighthDescription = document.getElementById("showEighthDescription");
const showNinthDescription = document.getElementById("showNinthDescription");
const showTenthDescription = document.getElementById("showTenthDescription");



prevSlider.addEventListener("click", function (){
  showSlides(slideIndex += -1);
});

nextSlider.addEventListener("click", function (){
  showSlides(slideIndex += 1);
});

dotOne.addEventListener("click", function (){
  showSlides(slideIndex = 1);
});

dotTwo.addEventListener("click", function (){
  showSlides(slideIndex = 2);
});

dotThree.addEventListener("click", function (){
  showSlides(slideIndex = 3);
});

dotFour.addEventListener("click", function (){
  showSlides(slideIndex = 4);
});

dotFive.addEventListener("click", function (){
  showSlides(slideIndex = 5);
});

dotSix.addEventListener("click", function (){
  showSlides(slideIndex = 6);
});

showDescription.addEventListener("click", function (){
  let x = document.getElementById("cardText");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});

showSecondDescription.addEventListener("click", function (){
  var x = document.getElementById("cardTwoText");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});

showThirdDescription.addEventListener("click", function (){
  var x = document.getElementById("cardThirdText");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});

showFourthDescription.addEventListener("click", function (){
  var x = document.getElementById("cardFourthText");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});

showFifthDescription.addEventListener("click", function (){
  var x = document.getElementById("cardFifthText");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});

showSixthDescription.addEventListener("click", function (){
  var x = document.getElementById("cardSixthText");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});

showSeventhDescription.addEventListener("click", function (){
  var x = document.getElementById("cardSeventhText");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});

showEighthDescription.addEventListener("click", function (){
  var x = document.getElementById("cardEighthText");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});

showNinthDescription.addEventListener("click", function (){
  var x = document.getElementById("cardNinthText");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});

showTenthDescription.addEventListener("click", function (){
  var x = document.getElementById("cardTenthText");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});

let slideIndex = 1; // initalised variable for slide index

showSlides(slideIndex);

function showSlides(n) {

  let i;
  
  let slides = document.querySelectorAll(".mySlides"); // grabs each slide and stores in variable
  
  let dots = document.querySelectorAll(".dot"); // grabs each dot and stores in variable

  if (n > slides.length) { // if slideshow reaches end of number of slides, it starts again
    
    slideIndex = 1
  
  }
  
  if (n < 1) {
    slideIndex = slides.length
  } // iterates through every slide
  
  for (i = 0; i < slides.length; i++) {
    
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}

