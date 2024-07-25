const menubar = document.querySelector('.menusvg');
const sidebar = document.querySelector('.sidebar')
const maincontent = document.querySelector('.maincontent')
menubar.addEventListener('click',function(){
    sidebar.classList.toggle('visible')
    maincontent.classList.toggle('adjustmaincontent')
})