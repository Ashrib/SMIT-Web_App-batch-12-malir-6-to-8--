import { useCallback, useState } from 'react'
import './App.css'
import  ListItem  from '../components/ListItem.jsx';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([{
    text: "items",
    id: Date.now(),
    completed: true,
    select: false
  }])

  let onDeleteHandler = useCallback( (id)=>{
    let updateItems = todo.filter((item)=> item?.id !== id)
    setTodo([...updateItems])
  },[todo])

  
  let addHandler = ()=>{
    if(input.length < 1){
      return
    }
    setTodo([...todo, {
      text: input,
      id: Date.now(),
      completed: false,
      select: false
    }])
    setInput('')
  }

  return (
    <>
    <button onClick={()=> {
      console.log('count click')
      setCount(count+1)
    }}>count</button>
    <p>{count}</p>

      <div className=' flex flex-col items-center justify-center bg-amber-100 ='>
        <h1 className='text-5xl'>Todo list</h1>
        <div>
          <input type="text"  className='p-3 border-2 rounded-sm' 
          placeholder='add todo item' 
          value={input}
          onChange={(e)=>{
            setInput(e.target.value)
            console.log(input)
          }}
          />
          <button onClick={addHandler} className='outline-2 p-3 '>add</button>
          </div>

          <ListItem todo={todo} onDelete={onDeleteHandler}/>
      </div>
    </>
  )
}

export default App
