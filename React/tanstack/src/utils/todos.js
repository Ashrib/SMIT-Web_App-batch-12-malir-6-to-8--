let todos = ['lunch','football', 'report']


export const getTodos = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        reslove(todos)
    },1000)
})