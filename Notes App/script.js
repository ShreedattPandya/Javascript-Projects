const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let initialInputBox = document.querySelector(".input-box");

// Adding the delete button to the initial(bydefault upon opening) input box
let initialImg = document.createElement("img");
initialImg.src = "images/delete.png";
initialImg.className = "delete-btn";
initialInputBox.appendChild(initialImg);

//Regular input-box
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", true);
    img.src = "images/delete.png";
    img.className = "delete-btn";
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG" && e.target.classList.contains("delete-btn")) {
        const parent = e.target.parentElement;
        if (parent === initialInputBox) {
            parent.textContent = ''; // Clear text but keep the box
            parent.appendChild(e.target); // Re-add the delete button
        } else {
            parent.remove(); // Remove the entire box
        }
        updateStorage();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            };
        });
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

// Save data locally
function showNotes() { 
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes()

function updateStorage() { 
    localStorage.setItem("notes", notesContainer.innerHTML);
}
