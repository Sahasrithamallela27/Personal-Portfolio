// Add an event listener to the hamburger button
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function() {
  // Toggle the visibility of the navigation links
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
});
