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

//
var h2_title = document.createElement("h2");
h2_title.innerHTML = "TESTO";

var p_text = document.createElement("p");
p_text.innerHTML = "CIAO COME VA COMA"


//

function createNoteDiv(){
    notesCounter++;

    leftBox.classList.remove("left-box")
    leftBox.classList.add("left-box-after");

    const newNoteDiv = document.createElement("div");
    leftBox.appendChild(newNoteDiv);

    newNoteDiv.classList.add("note-div");


    newNoteDiv.appendChild(h2_title);
    newNoteDiv.appendChild(p_text);


    
    if(notesCounter > 0){
        initMessage1.classList.add("not-empty-box");
        initMessage2.classList.remove("not-empty-box");
        leftBox.removeChild(initMessage1);
    }
}