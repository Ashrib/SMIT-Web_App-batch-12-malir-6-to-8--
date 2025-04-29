import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import  ProductCard  from '../../components/ProductCard'

export const Products = () => {
    const queryClient = useQueryClient()
    const [search, setSearch] = useState(null)

const fetchProducts = async(search)=>{
    let url = (!search)? 'https://dummyjson.com/products':`https://dummyjson.com/products/category/${search}`
    let data = await fetch(url)
    return await data.json();
    
}
    // Access the client
    
    // Queries
    const { data, isLoading, error,isFetching } = useQuery(
        { 
            queryKey: ['products'], 
            queryFn:()=>  fetchProducts(search),
            keepPreviousData: true

        }
    )

    // console.log(data)

  return (
    <div>
        
        <div>
        { isLoading && (
            <h2> loading....</h2>
        )

        }
    </div>

        <div>
        <input className='outline-2'
        type="text" 
        onChange={(e)=> setSearch(e.target.value)}
        />
        </div>
        {
            (data?.products)?
            <ProductCard products={data?.products}/>
        :
        null
        }
    </div>
    
    
  )
}
