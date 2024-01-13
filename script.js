const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
//const checkbox = document.getElementById("todo-checkbox");
let itemcount = 0;
let uncheckedcount = 0;
let checkremove = 0;
let id = 0;
function newTodo() {
  var userinput = prompt("Nhập vào todo-list: ")
  if(userinput == null) return;
  id++;
  itemcount++;
  itemCountSpan.textContent = itemcount;
  uncheckedcount++;
  uncheckedCountSpan.textContent = uncheckedcount;
  var newitem = document.createElement("li");
  var label = document.createElement("label")
  label.textContent = userinput + " ";
  label.id = "label" + itemcount;
  var check = document.createElement("input");
  check.type = "checkbox";
  check.id = "check" + id;
  check.className = "todo-checkbox";
  var remove_button = document.createElement("button");
  remove_button.id = "remove" + id;
  remove_button.className = "small-button";
  remove_button.textContent = "xóa";
  remove_button.style.visibility = "hidden";
  remove_button.addEventListener("click", function(){
    newitem.removeChild(label);
    newitem.removeChild(check);
    newitem.removeChild(remove_button);
    list.removeChild(newitem);
    itemcount--;
    itemCountSpan.textContent = itemcount;
    if(!check.checked) uncheckedcount--;
    uncheckedCountSpan.textContent = uncheckedcount;
  })
  check.addEventListener("click", function(){
    if(check.checked)
    { 
      uncheckedcount--;
      uncheckedCountSpan.textContent = uncheckedcount;
      label.innerHTML = '<s>' + label.textContent + '</s>';
    }
    else{
      uncheckedcount++;
      uncheckedCountSpan.textContent = uncheckedcount;
      label.innerHTML = label.innerHTML.replace(/<s>/g, '').replace(/<\/s>/g, '');
    }
    });
  newitem.appendChild(label);
  newitem.appendChild(check);
  newitem.appendChild(remove_button);
  list.appendChild(newitem);
}
function remove() {
  //alert("andy");
  if(checkremove % 2 == 0)
  { 
    for(let i = 1; i <= id; i++){
      if(document.getElementById("remove" + i) == null) continue;
      document.getElementById("remove" + i).style.visibility = "visible";
    }
  }
  else{
    for(let i = 1; i <= id; i++){
      if(document.getElementById("remove" + i) == null) continue;
      document.getElementById("remove" + i).style.visibility = "hidden";
    }
  }
  checkremove++;
}