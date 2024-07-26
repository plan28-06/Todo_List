const menubar = document.querySelector('.menusvg');
const sidebar = document.querySelector('.sidebar')
const maincontent = document.querySelector('.maincontent')
const sidebarbuttons = document.querySelectorAll('.buttons>button')

// To make sidebar open and collapse when menu button is pressed
menubar.addEventListener('click',function(){
    sidebar.classList.toggle('visible')
    maincontent.classList.toggle('adjustmaincontent')
})

for (let button of sidebarbuttons){
    button.addEventListener('click',function(e){
        if (this.classList[1][1]=='0'){
            sidebarbuttons[2].classList.remove('active');
            sidebarbuttons[1].classList.remove('active');
        }
        if (this.classList[1][1]=='1'){
            sidebarbuttons[0].classList.remove('active');
            sidebarbuttons[2].classList.remove('active');
        } 
        if (this.classList[1][1]=='2'){
            sidebarbuttons[0].classList.remove('active');
            sidebarbuttons[1].classList.remove('active');
        }
        button.classList.add('active');
    })
}
