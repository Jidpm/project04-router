import React from 'react'
import { useLoaderData } from 'react-router'

function Products() {
    const {products} = useLoaderData()
  return (
    <div>Products
        <img src="https://picsum.photos/id/237/500/300" alt="dog" />
        <hr />
        <ul>
            {products.map((products)=> (
              <li key={products.id}>{products.id}:{products.title}</li>  
            ))}
        </ul>
    </div>
  )
}

export default Products