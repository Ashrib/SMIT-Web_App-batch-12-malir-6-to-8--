import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'

export const Products = () => {
const fetchProducts = async()=>{
    let data = await fetch('https://dummyjson.com/products')
    return data.json()
}
    // Access the client
    const queryClient = useQueryClient()
    
    // Queries
    const query = useQuery(
        { queryKey: ['products'], queryFn:()=>  fetchProducts()}
    )


    // const mutation = useMutation({
    //     mutationFn: ()=>{},
    //     onSuccess: () => {
    //       // Invalidate and refetch
    //       queryClient.invalidateQueries({ queryKey: ['products'] })
    //     },
    //   })


    const {data, isError,isLoading,isFetching,error} = query;
   
    console.log()



    if (isLoading) {
        return( <div>loading....</div>)
    }
    
  return (
    <div>
         <div>
                {data?.products.map((product)=>{

                    return <button>{product.category}</button>
                })}
            </div>
        
        {
        (data)?



    data?.products?.map((product)=>{
        return (


            <div className='container mx-auto'>

           
            <div className="main">
            <div className='border-2 mb-3'>
                <img src={product?.thumbnail} alt=""  className='size-20'/> 
            <h2>{product?.title}</h2>
            
            </div>
            </div>

            </div>

            
        )
    })
    :
    <>no data</>
    
    }</div>
    
  )
}
