const setSvgColors = (color) => {
  const openerSvg = document.querySelector("#opener svg path:first-of-type");
  const closerSvg = document.querySelector("#closer svg path:first-of-type");

  if (openerSvg && closerSvg) {
    openerSvg.style.fill = color;
    closerSvg.style.fill = color;
    openerSvg.setAttribute("fill", color);
    closerSvg.setAttribute("fill", color);
    localStorage.setItem("svgColor", color);
  } else {
    console.warn("⚠️ SVG elements not found.");
  }
};

// Apply saved color when SVGs exist
const applySavedColor = () => {
  const savedColor = localStorage.getItem("svgColor");
  if (!savedColor) return;

  const tryApply = () => {
    const openerSvg = document.querySelector("#opener svg path:first-of-type");
    const closerSvg = document.querySelector("#closer svg path:first-of-type");

    if (openerSvg && closerSvg) {
      setSvgColors(savedColor);
    } else {
      setTimeout(tryApply, 100);
    }
  };

  tryApply();
};

const handleLinkClick = (e) => {
  e.preventDefault();
  setSvgColors("#00672E");

  setTimeout(() => {
    window.location.href = e.currentTarget.href;
  }, 150);
};

document.addEventListener("DOMContentLoaded", () => {
  applySavedColor();
});
