import React from 'react';
import WishlistProducts from '@/app/components/WishlistProducts';

const Wishlist = () => {

  return (
    <main className='m-5'>
      <h3 className='font-bold'>Shopping Cart</h3>
      <WishlistProducts />
    </main>
  );
};

export default Wishlist;
