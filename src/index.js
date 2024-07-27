import { sortarray } from "./sort";
import { render } from "./render";
const menubar = document.querySelector('.menusvg');
const sidebar = document.querySelector('.sidebar');
const maincontent = document.querySelector('.maincontent');
const sidebarbuttons = document.querySelectorAll('.buttons>button');
const plusbutton = document.querySelector('.addicondiv');
const dialog = document.querySelector('dialog');
const cancel = document.querySelector('.cancelbtn');
const addform = document.querySelector('.addbtn');
let listarray = [];
let titleinput = document.querySelector('#title');
let duedateinput = document.querySelector('#duedate');
let descriptioninput = document.querySelector('#description');
const renderdiv = document.querySelector(".todolist");

class listobj{
    constructor(title,due_date){
        this.title = title;
        this.due_date = due_date;
    }
}

// To make sidebar open and collapse when menu button is pressed
menubar.addEventListener('click',function(){
    sidebar.classList.toggle('visible')
    maincontent.classList.toggle('adjustmaincontent')
})


// To make the button that was recently clicked change font and bg color
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

// To add Todo's
plusbutton.addEventListener('click',()=>dialog.showModal());

// To close form

cancel.addEventListener('click',()=>dialog.close());

// To retrieve data entered submitted to the form

addform.addEventListener('click',function(event){
    event.preventDefault();
    let obj = new listobj(titleinput.value,duedateinput.value);
    listarray.push(obj);
    dialog.close();
    listarray = sortarray(listarray);
    titleinput.value = '';
    duedateinput.value = '';
    descriptioninput.value= '';
    render(listarray);

    
    // To remove item when trash icon is pressed
    const bins = document.querySelectorAll('.trash'); 
    for (let bin of bins){
        bin.addEventListener('click',function(e){
            let index = this.classList[1][1];
            listarray.splice(index,1);
            render(listarray);
        })
    }
})

