"use client";

import React, { useState } from "react";
import ProductShopCard from "@/app/components/ProductShopCard";
import { Product, products } from "@/data/seed";
import { useWishlist } from "@/hooks/use-wishlist";

const ProductIdPage = () => {
  const { addWishlistProduct, removeWishlistProduct, wishlistProducts } =
    useWishlist();

  return (
    <main className="m-5">
      <div className="flex justify-start text-left">
        <h3 className="mx-5 mb-5">Products Result: </h3>
        <h4 className="font-semibold">{products.length}</h4>
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-4 mb-7">
        {}

        {products.map((product) => (
          <ProductShopCard
            key={product.id}
            product={product}
            onLikeWishlist={
              wishlistProducts.find((p) => p.id === product.id)
                ? () => removeWishlistProduct(product)
                : () => addWishlistProduct(product)
            }
          />
        ))}
      </div>
    </main>
  );
};

export default ProductIdPage;
