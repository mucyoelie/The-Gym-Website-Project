// Updated header.js
document.addEventListener("DOMContentLoaded", () => {
  // Use event delegation for dynamically loaded content
  document.addEventListener('click', function(e) {
    // Open nav when opener is clicked
    if (e.target.id === 'opener' || e.target.closest('#opener')) {
      openNav();
    }
    
    // Close nav when closer is clicked
    if (e.target.id === 'closer' || e.target.closest('#closer')) {
      closeNav();
    }
  });

  window.openNav = function() {
    const mobileMenu = document.querySelector(".mobile-menu");
    const opener = document.getElementById("opener");
    const closer = document.getElementById("closer");
    
    if (mobileMenu && opener && closer) {
      mobileMenu.classList.remove("hidden");
      opener.classList.add("hidden");
      closer.classList.remove("hidden");
      mobileMenu.style.width = "100%";
    }
  };

  window.closeNav = function() {
    const mobileMenu = document.querySelector(".mobile-menu");
    const opener = document.getElementById("opener");
    const closer = document.getElementById("closer");
    
    if (mobileMenu && opener && closer) {
      mobileMenu.classList.add("hidden");
      opener.classList.remove("hidden");
      closer.classList.add("hidden");
      mobileMenu.style.width = "0";
    }
  };
}); 