// Pops up the new note window
let popup = document.getElementById("popup");
function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}

// Add new div for note + manage init messages display
var leftBox = document.getElementById("leftBox");
var rightBox = document.getElementById("rightBox");
var initMessage1 = document.getElementById("initMessage1");
var initMessage2 = document.getElementById("initMessage2");
var notesCounter = 0;

initMessage2.classList.add("not-empty-box");

function createNoteDiv(){
    notesCounter++;

    const newNoteDiv = document.createElement("div");
    leftBox.appendChild(newNoteDiv);
    
    if(notesCounter > 0){
        initMessage1.classList.add("not-empty-box");
        initMessage2.classList.remove("not-empty-box")
    }
}