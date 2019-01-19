// Get the modal
var wordtranslateModal = document.getElementById('wordtranslate-modal');

// Get the button that opens the modal
var wordtranslateBtn = document.getElementById("wordtranslate-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
wordtranslateBtn.onclick = function() {
  wordtranslateModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  wordtranslateModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == wordtranslateModal) {
    wordtranslateModal.style.display = "none";
  }
}
