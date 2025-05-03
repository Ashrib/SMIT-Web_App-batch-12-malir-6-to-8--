import { useState } from "react";

const todos = ['lunch','coffee', 'play','report'];


export const postTodos = (todo)=> new Promise((resolve,reject)=>{
    setTimeout(()=>{
        todos.push( todo)
        resolve(todos)
    },1000)
})

export const getTodos = ()=> new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(todos)
    },1000)
})