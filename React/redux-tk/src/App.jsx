import {  useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment,incrementByAmount} from './redux/counter/counterSlice.js'
import { deleteData,setData} from './redux/user/userSlice.js'


function App() {
const count = useSelector((state)=> state.counter.value);
const user = useSelector((state)=> state.user.value);
const dispatch = useDispatch();

  return (
    <>
     <h2>{count}</h2>
    <div>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(incrementByAmount(50))}>incr by amount</button>
      </div>

      <div>
        {(user.name )? user.name:''}
        {(user.age )? user.age:''}
        <button onClick={()=>dispatch(deleteData())}>delete</button>
      <button onClick={()=>dispatch(setData({
        name:'xyz',age:20,
      }))}>set data</button>
      </div>
    </>
  )
}

export default App
