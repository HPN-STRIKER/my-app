// Pops up the new note window
let popup = document.getElementById("popup");
function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}

// Display "Click the + button to add a note"
var leftBox = document.getElementById("leftBox");
var numberOfElementsLeft = leftBox.getElementsByTagName('*').length;

if(numberOfElementsLeft > 2){
    leftBox.classList.add("not-empty-left-box");
}
else{
    leftBox.classList.remove("not-empty-left-box");
}