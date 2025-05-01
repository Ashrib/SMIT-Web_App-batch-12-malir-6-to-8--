import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import  ProductCard  from '../../components/ProductCard'

export const Products = () => {
    const queryClient = useQueryClient()
    const [search, setSearch] = useState('')
    const [categoryValue, setCategoryValue] = useState('All')

const fetchProducts = async(search)=>{
    let url = (search)? `https://dummyjson.com/products/search?q=${search}`:
     (categoryValue === 'All')? `https://dummyjson.com/products`:`https://dummyjson.com/products/category/${categoryValue}`

    let data = await fetch(url)
    return await data.json();
}

const fetchCategories = async()=>{
    let url = 'https://dummyjson.com/products/categories'
    let data = await fetch(url)
    return await data.json();
}  

// Access the client
    
    // Queries
    const { data, isLoading, error,isFetching } = useQuery(
        { 
            queryKey: ['products',search,categoryValue], 
            queryFn: ()=> fetchProducts(search),
            keepPreviousData: true
        }
    )

// categories fetch
    const query2 = useQuery({
        queryKey : ['categories'],
        queryFn: fetchCategories,

    })

    const { data: categories , isLoading: categoryLoading} = query2
    console.log(categories)
    console.log(categoryValue)


  return (
    <div>
        
        <div>
        { (isLoading || categoryLoading) && (
            <h2> loading....</h2>
        )

        }
    </div>

        <div>
            <div className='flex gap-1 flex-wrap'>
                {/* render All */}
            <button className={`${(categoryValue === 'All') ? 'outline-1 text-red-700' : ''}`}
                        onClick={()=> {
                            setCategoryValue("All");
                            setSearch('')
                        }}
                        >All</button>
                        {/* listing categories */}
                {(categories)? categories?.map((category)=>{
                    return (
                        <button className={`${(categoryValue === category?.slug) ? 'outline-1 text-red-700' : ''}`}
                        onClick={()=> {
                            setCategoryValue(category?.slug);
                            setSearch('')
                        }}
                        >{category?.slug}</button>
                    )
                }):null}
            </div>

        <input className='outline-2'
        type="text" 
        onChange={(e)=> {
            setSearch(e.target.value)
            setCategoryValue("All")
        }}
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
