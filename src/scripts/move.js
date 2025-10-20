window.addEventListener("scroll", () => {
  const polygons = document.querySelectorAll('[class*="clip-path"]');

  polygons.forEach((polygon, index) => {
    const rect = polygon.getBoundingClientRect();
    const polygonTop = rect.top;
    const polygonHeight = rect.height;

    const maxMove = polygonHeight * 0.2;

    if (polygonTop <= 0) {
      const scrolled = Math.min(-polygonTop, maxMove);
      const speed = 0.7;
      polygon.style.transform = `translateY(${scrolled * speed}px)`;
    }
  });
});
