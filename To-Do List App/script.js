const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function  addTask(){
    if(inputBox.value === ""){
        alert('Please enter a task');
    }else{
        let li = document.createElement("li"); //Create a individual new list upon adding
        li.innerHTML = inputBox.value; //input box to list item
        listContainer.appendChild(li);//individual list to ul container

        let span = document.createElement("span")
        span.innerHTML="\u00d7" //cross sign
        li.appendChild(span)
    }   
    inputBox.value = ""; //clear the input field after submission
    saveData(); //Saving after every addition of tasks in local storage
}
//Remove or strike task/list
listContainer.addEventListener("click", function (e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); //adds "checked" class for in html(css has it).[toggle() is used to add/remove class on a click].Hence class added on click
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); //Remove list(parent) not (cross)span
        saveData();
    }
},false)

//store tasks in browser
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
//load tasks from browser
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();