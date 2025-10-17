const setSvgColors = (color) => {
  const openerSvg = document.querySelector('#opener svg path:first-of-type');
  const closerSvg = document.querySelector('#closer svg path:first-of-type');

  if (openerSvg && closerSvg) {
    openerSvg.style.fill = color;
    closerSvg.style.fill = color;
    openerSvg.setAttribute('fill', color);
    closerSvg.setAttribute('fill', color);
    localStorage.setItem('svgColor', color);
  } else {
    console.warn('⚠️ SVG elements not found.');
  }
};

const applySavedColor = () => {
  const savedColor = localStorage.getItem('svgColor');
  if (!savedColor) return;
  setSvgColors(savedColor);
};

// ✅ Wait for custom event (header fully loaded)
document.addEventListener('headerLoaded', () => {
  applySavedColor();
});

// Optional: reapply if new elements appear dynamically
const observer = new MutationObserver(() => {
  applySavedColor();
});
observer.observe(document.body, { childList: true, subtree: true });
