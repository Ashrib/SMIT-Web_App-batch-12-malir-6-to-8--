import React, { useEffect, useState } from 'react'

 let ListItem = ({todo, onDelete}) => {
 const [select, setSelect] = useState([])
 
    useEffect(()=>{
        console.log("list component")
        console.log(todo)
    },[onDelete])

    let handleSelect = (id)=>{
        setSelect([...select, ...(todo.filter(item=> id === item.id))])
        console.log(select)
    }
   
    return (
        <div className='pt-2'>
            {
                (todo.length <1)?
                (
                    <div  className='flex border-2  gap-2'>
                    <span className=' p-2'>No list items </span>
                    </div>
                )
                :
                todo?.map((item)=>(
                    <div key={item?.id} className='flex border-2  gap-2'>
                    <span className={`p-2  ${item?.completed? 'bg-green-300 line-through': 'bg-transparent'}`}
                    // style={{backgroundColor: true? 'red': 'green'}}
                    >{item?.text} </span>
                    <button className='bg-red-400  p-2' onClick={()=> onDelete(item?.id)}>delete</button>
                    </div>
                ))
            }
        </div>
    )
}
export default ListItem;