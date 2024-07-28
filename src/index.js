import { sortarray } from "./sort";
import { render } from "./render";
import { today } from "./today";
import { week } from "./week";


const menubar = document.querySelector('.menusvg');
const sidebar = document.querySelector('.sidebar');
const maincontent = document.querySelector('.maincontent');
const sidebarbuttons = document.querySelectorAll('.buttons>button');
const plusbutton = document.querySelector('.addicondiv');
const dialog = document.querySelector('dialog');
const cancel = document.querySelector('.cancelbtn');
const addform = document.querySelector('.addbtn');
const renderdiv = document.querySelector(".todolist");
const todaybtn = document.querySelector('.todaybtn');
const weekbtn = document.querySelector('.weekbtn');
const allbtn = document.querySelector('.allbtn');

let listarray = [];
let todayarray;
let weekarray;
let titleinput = document.querySelector('#title');
let duedateinput = document.querySelector('#duedate');
let descriptioninput = document.querySelector('#description');
let strlistarray;
let checkarray;


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

// Add functionality to today btn
todaybtn.addEventListener('click',function(){
    if ((listarray.length > 0 ) && (todaybtn.classList.contains('active'))){
        todayarray = today(listarray);
        sortarray(todayarray);
        render(todayarray);
    }
})


// Add functionality to week btn
weekbtn.addEventListener('click',function(){
    if ((listarray.length > 0 ) && (weekbtn.classList.contains('active'))){
        weekarray = week(listarray);
        sortarray(weekarray);
        render(weekarray);
    }
})

// Add functionality to add btn
allbtn.addEventListener('click',function(){
    if (listarray.length > 0){
        render(listarray);
    }
})


// To add Todo's
plusbutton.addEventListener('click',function(){
    if ((todaybtn.classList.contains('active') == false) && (weekbtn.classList.contains('active') == false)){
        dialog.showModal();
    }
    else{
        return;
    }
});


// To close form
cancel.addEventListener('click',()=>dialog.close());


// To update data from listarray to local storage
function updatetolocalstorage(){
    strlistarray = JSON.stringify(listarray);
    localStorage.setItem('mykey',strlistarray);
}


// To retrieve data entered submitted to the form
addform.addEventListener('click',function(event){
    event.preventDefault();
    if ((titleinput.value != '') && (duedateinput.value != '') && (descriptioninput.value != '')){ 
        let obj = new listobj(titleinput.value,duedateinput.value);
        listarray.push(obj);
        dialog.close();
        listarray = sortarray(listarray);
        titleinput.value = '';
        duedateinput.value = '';
        descriptioninput.value= '';
        updatetolocalstorage();
        render(listarray);
    }
})


// Function to handle trash bin clicks
function handleTrashClick(e) {
    if (e.target.classList.contains('trash')) {
        let index = e.target.classList[1][1]; 
        listarray.splice(index, 1); 
        updatetolocalstorage(); 
        render(listarray); 
    }
}


// So that handleTrashClick gets called
renderdiv.addEventListener('click', handleTrashClick); 


// To load data from local storage when the page loads
document.addEventListener('DOMContentLoaded',function(){

    checkarray=localStorage.getItem('mykey');
    if (checkarray){
        listarray = JSON.parse(checkarray);
    }
    else{
        listarray = [];
    }
    render(listarray);
})