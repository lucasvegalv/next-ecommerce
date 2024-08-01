'use client'

import { useWishlist } from '@/hooks/use-wishlist'
import React from 'react'
import ProductShopCard from './ProductShopCard';


const WishlistProducts = () => {
  const wishlist = useWishlist();
  const {removeWishlistProduct } = useWishlist();

  return (
    <div className='m-5'>
      {wishlist.wishlistProducts.map(producto => (
        <ProductShopCard 
          key={producto.id} 
          product={producto} 
          onLikeWishlist={() => removeWishlistProduct(producto)}
        />
      ))
      }
    </div>
  )
}

export default WishlistProducts