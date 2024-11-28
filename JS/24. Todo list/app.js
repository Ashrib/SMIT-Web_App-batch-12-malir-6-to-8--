var data = [
  {
    text: "list1",
  },
  {
    text: "list2",
  },
];

var boxDiv = document.getElementsByClassName("box")[0];

function submitInput(e) {
  e.preventDefault();
  var inp = document.getElementById("input-text");
  data = [...data, { text: inp.value }];
  boxDiv.innerHTML = "";//empty the previous data frontend
  dataRender();

  console.log(data);
  inp.value = "";
}

function dataRender() {
  for (let i = 0; i < data.length; i++) {
    boxDiv.innerHTML += `<div class='list-item'>
    <p id="${i}">
    ${data[i].text}
    </p>
    <input type='text' value='${data[i].text}' class='inpEdit'/ >
    <button onClick="editItem(event)">edit</button>
    <button onClick="deleteItem(event)">delete</button>
    </div>`;
  }
}
dataRender();

function deleteItem(e) {
  console.log(
    e.target.previousElementSibling.previousElementSibling
      .previousElementSibling.id
  );
  data.splice(
    e.target.previousElementSibling.previousElementSibling
      .previousElementSibling.id,
    1
  );
  boxDiv.innerHTML = ""; //empty the previous data frontend
  dataRender();
}

function saveEdit(id, updateValue) { // save function
  data[id] = {...data[id], // to save remaining data
    text: updateValue, // update text key only
  };
  boxDiv.innerHTML = "";//empty the previous data frontend
  dataRender();
}

function editItem(e) {
  if (e.target.innerText === "save") {
    console.log(e.target.previousElementSibling.value);
    saveEdit(
      e.target.previousElementSibling.previousElementSibling.id,
      e.target.previousElementSibling.value
    );
    e.target.innerText = "edit";
  }
  e.target.previousElementSibling.style.display = "block";
    e.target.previousElementSibling.previousElementSibling.style.display =
      "none";
  e.target.nextElementSibling.style.display = "none";
  e.target.innerText = "save";
};

var obj = {
  a:'sdfsdf',
  b:'sdgdfhrt',
}
obj = {...obj}

console.log(obj);

