import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'

import { getTodos, postTodos} from '../utils/todos.js'

const Todos = () => {

  const [input, setInput] = useState('')

  // Access the client
  const queryClient = useQueryClient()

  // Queries
  const {data} = useQuery({ queryKey: ['todos'], queryFn: getTodos })

  // Mutations
  const mutation = useMutation({
    mutationFn: postTodos,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
  
  console.log(data)
  
  return (
    <div> 
      <input type="text" 
      className='outline-2'
      onChange={(e)=>setInput(e.target.value)}
      />

      {data?.map((todo,i)=>(

        <h2 key={i}>
          {todo}

        </h2>
))}


<button 
disabled={input.length<1}
onClick={()=> mutation.mutate(input)}
> post todo</button>
    </div>
  )
}



export default Todos