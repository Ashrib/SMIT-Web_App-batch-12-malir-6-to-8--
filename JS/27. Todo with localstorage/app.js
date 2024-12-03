  var boxElm = document.getElementsByClassName('box')[0];
function ListData(itemValue){
  this.listText = itemValue;
  this.id = Math.floor((Math.random()*1000 + Number((new Date().getTime().toString()).slice(-4))) ) // generating id for obj
}
function saveData(data) {
  localStorage.setItem('todo_items', JSON.stringify(data))
  boxElm.innerHTML = ''  // to empty the UI
  renderListItems(); // render updated data in UI
}
function readData() {
  return JSON.parse(localStorage.getItem('todo_items'));
}

var todoData =  (readData()) ?  [...readData()] : []  ; //  save previous data

function submitInput(e) {
  e.preventDefault();
  var inpValue = document.getElementById('input-text').value;
  
  var obj = new ListData(inpValue);
  todoData = [...todoData, obj]
  console.log(todoData);
  saveData(todoData) // to update the local storage with new data
}

function renderListItems() {
    for (let i = 0; i < todoData.length; i++) {
      boxElm.innerHTML += `<div style='display:flex;'>
      <input type='text' value='${todoData[i].listText}' class='hide'/>
      <p>${todoData[i].listText}</p>
      <button onClick='editItem(event,${todoData[i].id})'>edit</button>
      </div>`
    }
}
renderListItems();

function editItem(e ,id){
  e.target.previousElementSibling.style.display ='none'
  e.target.previousElementSibling.style.display ='none'
  e.target.previousElementSibling.previousElementSibling.style.display ='block'
  e.target.innerText = 'save'
  var editInpValue = e.target.previousElementSibling.previousElementSibling.value;
  console.log(editInpValue)
  e.target.setAttribute('onClick' , `updatedItem(${id}, ${editInpValue})`)

 

}

function updatedItem(id , inptValue){
  console.log(id,inptValue)
  for (let i = 0; i < todoData.length; i++) {
    if(todoData[i].id === id){
      todoData[i] = {...todoData[i], listText:  inptValue}
      saveData(todoData)
      return
    }
  }
}




