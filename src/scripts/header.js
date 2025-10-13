
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener('click', function(e) {
    if (e.target.id === 'opener' || e.target.closest('#opener')) {
      openNav();
    }
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
      document.body.style.overflow = 'hidden';
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
      document.body.style.overflow = ''; 
      mobileMenu.style.width = "0";
    }
  };
}); 