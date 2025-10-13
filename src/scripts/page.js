const first_link = document.getElementById("left");
const second_link = document.getElementById("right");
const openerSvg = document.querySelector('#opener svg path');
const closerSvg = document.querySelector('#closer svg path');

first_link.addEventListener('click', ()=>{
    openerSvg.setAttribute('fill', '#00672E'); // Green
    closerSvg.setAttribute('fill', '#00672E');
});

second_link.addEventListener('click',()=>{
    openerSvg.setAttribute('fill', '#00672E'); // Green
    closerSvg.setAttribute('fill', '#00672E');
})
