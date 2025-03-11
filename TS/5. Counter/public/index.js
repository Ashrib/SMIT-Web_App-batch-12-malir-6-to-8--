"use strict";
let countText = document.querySelector('#count-text');
let addBtn = document.querySelector('#add');
let count = 0;
addBtn.addEventListener('click', () => {
    count++;
    countText.innerText = count.toString();
});
addBtn.disabled = true;
let door = 'close';
let user = 50;
