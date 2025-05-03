import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import  ProductCard  from '../../components/ProductCard'
import {Pagination} from '@mui/material';

export const Products = () => {
    const queryClient = useQueryClient()
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [skipProducts, setSkipProducts] = useState(0)
    const [categoryValue, setCategoryValue] = useState('All')

    const PER_PAGE_LIMIT = 10;

const fetchProducts = async(search)=>{
    let url = (search)? `https://dummyjson.com/products/search?q=${search}&limit=${PER_PAGE_LIMIT}&skip=${skipProducts}`:
     (categoryValue === 'All')? `https://dummyjson.com/products?limit=${PER_PAGE_LIMIT}&skip=${skipProducts}`:`https://dummyjson.com/products/category/${categoryValue}?limit=${PER_PAGE_LIMIT}&skip=${skipProducts}`

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
            queryKey: ['products',search,categoryValue,skipProducts], 
            queryFn: ()=> fetchProducts(search),
            keepPreviousData: true
        }
    )


console.log("data:",data)

// categories fetch
    const query2 = useQuery({
        queryKey : ['categories'],
        queryFn: fetchCategories,

    })

    const { data: categories , isLoading: categoryLoading} = query2

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
                            setSkipProducts(0)
                        }}
                        >All</button>
                        {/* listing categories */}
                {(categories)? categories?.map((category)=>{
                    return (
                        <button className={`${(categoryValue === category?.slug) ? 'outline-1 text-red-700' : ''}`}
                        onClick={()=> {
                            setCategoryValue(category?.slug);
                            setSearch('');
                            setSkipProducts(0);
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

        <div>
        <Pagination
        page={currentPage}
         count={data? Math.ceil(data?.total/PER_PAGE_LIMIT) : 1} 
         color="primary" 
         onChange={(e,page)=>{
            setCurrentPage(page)
            setSkipProducts((page -1) * PER_PAGE_LIMIT)
         }}
         showFirstButton
         showLastButton
         />
         
        </div>
    </div>
  )
}
