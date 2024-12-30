import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Show = () => {
    
    
    const [product, setProduct] = useState([])

  useEffect(()=> {
    getproduct()
  },[])

  const getproduct = ()=> {
    const api = "https://fakestoreapi.com/products";

    axios.get(api).then(product=> {
      console.log(product,"product");;     
      setProduct(product.data)
    }).catch(err=> console.log(err));

  }
  return (
    <div className='p-10'>
    <button onClick={getproduct} className='bg-red-500 mb-10 text-md px-5 rounded-md py-2'>call product api</button>

    <br />
{product.length > 0 ? product.map(item => <h1>{item.title}</h1>) : <h1>...loading</h1>}
  </div>
  )
}

export default Show