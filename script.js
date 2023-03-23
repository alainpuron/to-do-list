// when user clicks checkbox a line goes tho the text written
function myFunction(checkbox) {
    var text = checkbox.nextElementSibling;
    if (checkbox.checked == true) {
        text.style.textDecoration = "line-through";
    }
     else {
        text.style.textDecoration = "none";
    }
};

var i = 0;

function duplicate() {
    var original = document.getElementById('HiddenList');
    var clone = original.cloneNode(true); 
    clone.id = "HiddenList" + ++i;
    clone.style.display = "block";
    var addButton = document.getElementById('add');
    addButton.parentNode.insertBefore(clone, addButton);
};


function del() {
    var checkboxes = document.getElementsByClassName('todo');
    var notes = document.getElementsByClassName('note');
    var indexesToRemove = [];
  
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        indexesToRemove.push(i);
      }
    }
  
    for (var i = indexesToRemove.length - 1; i >= 0; i--) {
      var index = indexesToRemove[i];
      checkboxes[index].parentNode.removeChild(checkboxes[index]);
      notes[index].parentNode.removeChild(notes[index]);
    }
  }
  


