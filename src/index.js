const root = document.querySelector("#root");
const notesList = document.querySelector("ul#notes-list")
const noteInput = document.querySelector("#note-input")

function createNotes(){
  const ul = document.createElement("ul");
  for(let i = 0; i < 10; i++){
    const li = document.createElement("li")
    li.innerText = `note ${i + 1}`;
    ul.appendChild(li)
  }
  root.appendChild(ul)
}

const form = document.querySelector("#form");
form.addEventListener("submit", function(evt){
  evt.preventDefault();
  appendNote(evt.target[0].value);
})

notesList.addEventListener("click", function(evt){

  if (evt.target.tagName == "BUTTON"){
    console.dir(evt.target)
    const parent = evt.target.parentElement;
    parent.remove()
  }
})

function appendNote(val){
  const li = document.createElement("li")
  const del = document.createElement("button")
  del.innerText = "×"
  const taskSpan = document.createElement("span")
  taskSpan.innerText = val;
  li.appendChild(taskSpan);
  li.appendChild(del)
  notesList.appendChild(li);
  noteInput.value = "";
}