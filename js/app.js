document.addEventListener('DOMContentLoaded', function () {

const menuBtn = document.querySelector('.burger-menu');
const sidebar = document.querySelector('.sidebar__nav');

addListener(menuBtn);

function addListener(btn) {
btn.addEventListener('click', ()=>{
sidebar.classList.toggle('nav-hidden');
document.querySelector('.burger-menu_icon').classList.toggle('burger-menu_close');
});
}




});