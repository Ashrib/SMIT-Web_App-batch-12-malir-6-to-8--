import React from 'react'

export default function Card({data, addToCart}) {

    const {title, images, category, id} = data

  return (
    <div className='container flex border-2 w-full'>
        <img className='size-30' src={images[0]} alt="" />
        <div className='text-3xl'>
            <span>{title}</span>
        </div>
        <button className=' flex outline-2 self-end' onClick={()=>{addToCart(id)}}>add to cart</button>
    </div>
  )
}
