const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");

        // x icon
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){

        // adds the class checked to the li elements
        e.target.classList.toggle("checked");
        saveData();
    }

    // removes the class checked 
    else if(e.target.tagName === "SPAN"){
       e.target.parentElement.remove(); 
       saveData();

    }
},false);

// save data 
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();