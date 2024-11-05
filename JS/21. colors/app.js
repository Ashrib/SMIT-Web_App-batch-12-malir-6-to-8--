
var mainBdy = document.getElementsByClassName('body')[0];
var colors = ['red','green', 'yellow', 'orange'];
var score = 0;
var matchDiv = document.getElementsByClassName('match')[0];
var scoreDiv = document.getElementsByClassName('score')[0];

function toUpdate(){
  matchDiv.style.backgroundColor =  colors[Math.floor(Math.random()*4)];
  scoreDiv.innerHTML = score;

  console.log("this:",  )
  
  for(var i =0; i<mainBdy.childNodes.length; i++){
    mainBdy.childNodes[i].style.backgroundColor = colors[Math.floor(Math.random()*4)];
  }

}
toUpdate();

function toMatch(e){
  console.log(e.target.style.backgroundColor )
  if(e.target.style.backgroundColor === matchDiv.style.backgroundColor){
    console.log(true);
    score++;
    toUpdate();
    return;
  }
  
  console.log(false);
  
}

for(var i =0; i<80; i++){
  // mainBdy.innerHTML += `<div class='box'></div>`;
  var divElm = document.createElement('div');
  divElm.setAttribute('class', 'box');
  divElm.setAttribute('onClick', 'toMatch(event)');
  divElm.style.backgroundColor = colors[Math.floor(Math.random()*4)];
  mainBdy.appendChild(divElm);

}


