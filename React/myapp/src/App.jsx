import { useDebugValue, useEffect, useMemo, useState } from 'react'
import './App.css'
import Card from '../components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([])
  const [card, setcard] = useState([{},{}])
  const [cart, setCart] = useState([])
  const [number, setNumber] = useState([34,46,567,235,6578,235,68,234,547,214])

let cal = ()=>{
  console.log('heavy load function')
  return number.map((num, i)=>  num*i)
}
   
let fetchProducts = async () => {
  try {
    let response = await fetch('https://api.escuelajs.co/api/v1/products');
    let products = await response.json();
    setProducts(products);
    console.log(products)
  } catch (error) {
    console.error('Fetch error:', error);
  }
}
useEffect(()=>{
  let cartData = JSON.parse(localStorage.getItem('cart'))
  if(cartData){
    setCart(cartData)
  }
},[])

useEffect(()=>{
 fetchProducts();
},[])

useMemo(()=>{ // memo to avoid re-cal
 cal();
},[])

let  addToCart = (id)=>{
  console.log(id)
  let cartProduct = products.findIndex(product => product.id === id)
  console.log(cartProduct)
  setCart([...cart, products[cartProduct]])
  localStorage.setItem('cart',JSON.stringify(cart))
  console.log(cart)
}
  return (
    <div className='container flex flex-col'>
    <div className='container flex justify-center items-center p-3 bg-white w-full  fixed top-0'>
      Cart: {cart.length}
    </div>

    <div className=' flex pt-15 gap-2 flex-wrap w-[100vw]'>
        {products.map((product,i)=>(
          <Card key={product.id} data={product} addToCart={addToCart}/>
        ))}
          {/* <span className='text-5xl'>{count}</span>
        <button onClick={()=>setCount(count+1)}>count</button>
        <button onClick={()=>setNumber([435,546,657,798,43])}>change array</button> */}
      </div>
    </div>
  )
}

export default App;
