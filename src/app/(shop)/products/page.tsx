'use client'

import React, { useState } from 'react'
import ProductShopCard from '@/app/components/ProductShopCard'
import { Product, products } from '@/data/seed'


const page = () => {

  const [wish, setWishlist] = useState<Product[]>([])

  const wishlistProducts = products.filter(product => product.onWishlist);

  const handleAddToWishlist = (product: Product, wishList: boolean | undefined) => {
    if(!wishList) {
      setWishlist((prev) => [...prev, product])
      console.log(`Agregamos el producto con id: ${product.id} a la wishlist!`)
      console.log(wish)
      console.log(wishlistProducts)
    } else {
      setWishlist((prev) => prev.filter(item => item.id !== product.id));
      console.log(`Eliminamos el producto con id: ${product.id} de la wishlist!`)
    }

  }

  return (
    <main className='m-5'>

      <div className='flex justify-start text-left'>
        <h3 className='mx-5 mb-5'>Products Result: </h3>  
        <h4 className='font-semibold'>{products.length}</h4>
      </div>

      <div className='flex flex-wrap justify-center gap-4 p-4 mb-7'>
        {products.map(product => (
          <ProductShopCard key={product.id} product={product} onLikeWishlist={handleAddToWishlist}/>
        ))}
      </div>
    </main>
  )
}

export default page