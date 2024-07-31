import React from 'react';
import { Product, products } from '@/data/seed';
import ProductShopCard from '@/app/components/ProductShopCard';

interface WishlistProps {
  product: Product[];
}
const wishlistProducts = products.filter(product => product.onWishlist);

const Wishlist = ({ product }: WishlistProps) => {

  const handleWishlistLike = (product: Product, wishList: boolean | undefined) => {
    console.log(`Producto con ID ${product.id} fue ${wishList ? 'removido' : 'agregado'} de la lista de deseos.`);
  };

  return (
    <main className='m-5'>
      <div className='flex justify-start text-left'>
        <h3 className='mx-5 mb-5'>You added <span className='font-semibold'>{wishlistProducts.length}</span> products to the wishlist!</h3>
      </div>

      <div className='flex flex-wrap justify-center gap-4 p-4 mb-7'>
        {wishlistProducts.map(product => (
          <ProductShopCard key={product.id} product={product} onLikeWishlist={handleWishlistLike} />
        ))}
      </div>
    </main>
  );
};

export default Wishlist;
