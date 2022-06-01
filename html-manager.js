// Pops up the new note window
let popup = document.getElementById("popup");
function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}

// Display "Click the + button to add a note"
var emptyLeftBox = document.getElementById('leftBox').innerHTML === "";
let leftBox = document.getElementById("leftBox")

if(emptyLeftBox){
    leftBox.classList.add("not-empty-left-box");
}
else{
    leftBox.classList.remove("not-empty-left-box");
}