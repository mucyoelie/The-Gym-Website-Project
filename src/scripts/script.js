/**
 * Using Intersection Observer API + CSS Animations
 *
 * Animation on polygons on the hero section from home page
 */
document.addEventListener("DOMContentLoaded", () => {
  // Create a new Intersection Observer instance
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% of the element is visible
    }
  );

  // Target all the shape elements
  const shapes = document.querySelectorAll(".absolute");

  shapes.forEach((shape) => {
    observer.observe(shape); // Start observing each shape
  });
});
