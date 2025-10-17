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


// Apply saved color when SVGs exist 
const applySavedColor = () => {
  const savedColor = localStorage.getItem('svgColor');
  if (!savedColor) return;
  setSvgColors(savedColor);
};


// ✅ Wait for header/footer to load before running color logic
document.addEventListener('DOMContentLoaded', () => {
  const waitForSvg = () => {
    const openerSvg = document.querySelector('#opener svg path');
    const closerSvg = document.querySelector('#closer svg path');

    if (openerSvg && closerSvg) {
      applySavedColor();
    } else {
      setTimeout(waitForSvg, 100); // retry until SVGs exist
    }
  };

  waitForSvg();
});


// Optional: reapply when new elements are added dynamically
const observer = new MutationObserver(() => {
  applySavedColor();
});
observer.observe(document.body, { childList: true, subtree: true });
