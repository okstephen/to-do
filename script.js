const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
function addTask(){
    if(inputBox.value === '') {
        alert("You must input a text");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagNname === "LI"){
        e.target.classlist.toggle("checked");
    }
    else if (e.target.tagNname === "span") {
        e.target.parentElement.remove();
    }
}, false);