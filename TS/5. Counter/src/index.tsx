let countText = document.querySelector('#count-text') as HTMLSpanElement;
let addBtn = document.querySelector('#add') as HTMLButtonElement

let count :number = 0;

addBtn.addEventListener('click', ()=>{
    count++;
    countText.innerText = count.toString()
})

addBtn.disabled = true;



type state = 'open' | 'close'
type num = 50 | 100


let door : state = 'close'
let user : num = 50

