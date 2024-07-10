let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// toggle menu/navbar script
$('.menu-btn').click(function(){
  $('.navbar .menu').toggleClass("active");
  $('.menu-btn i').toggleClass("active");
});

// night mode
$('.night-mode').click(function(){
  $('body').toggleClass('night-mode');
  $('navbar').toggleClass('night-mode');
  $('footer').toggleClass('night-mode');
  
  // change img in night mode
  var sun = $('body').hasClass('night-mode') ? 'assests/Main-Page/Navbar/sun-regular.svg' : 'assests/Main-Page/Navbar/moon-solid.svg';
  $('#nightModeImage').attr('src', sun);
  var profile = $('body').hasClass('night-mode') ? 'assests/Main-Page/Navbar/user-solid-night-mode.svg' : 'assests/Main-Page/Navbar/user-solid.svg';
  $('#userImage').attr('src', profile);
  
});
