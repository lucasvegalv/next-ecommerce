"use client";

import React from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import Link from "next/link";
import { Product } from "@/data/seed";
import { useWishlist } from "@/hooks/use-wishlist";
import Image from "next/image";

interface Props {
  product: Product;
  onLikeWishlist: (product: Product, wishList: boolean | undefined) => void;
}

const ProductShopCard = ({ product, onLikeWishlist }: Props) => {

  const { addWishlistProduct, wishlistProducts } = useWishlist();

  const handleLike = () => {
    onLikeWishlist(product, product.onWishlist);
  };

  return (
    <div className="flex flex-wrap gap-4">
      <div
        key={product.id}
        className="w-48 bg-gray-100 bg-opacity-90 hover:bg-gray-200 flex flex-col justify-between items-center rounded-md p-5 transition-all relative"
      >
        <div
          className="absolute top-2 right-2 cursor-pointer mb-5"
          onClick={handleLike}
        >
          {!product.onWishlist ? (
            <IoHeartOutline size={20} className="opacity-55" color="gray" />
          ) : (
            <IoHeartSharp size={20} className="opacity-55" color="gray" />
          )}
        </div>

        <div className="mb-5">
          <Link href={`/products/${product.id}`} className="flex-shrink-0 w-full h-32 flex items-center justify-center mb-4">
            <Image src={product.src} alt={product.alt} className="w-full h-full object-contain" width={250} height={250}/>
          </Link>
          <h3 className="text-sm text-center">{product.title}</h3>
          <h4 className="font-bold text-center">${product.price}</h4>
        </div>

        <Link href={`/products/${product.id}`} className="mt-auto text-xs py-3 px-10 border border-gray-500 rounded-md bg-black hover:opacity-80 text-white transition-all w-full text-center">
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default ProductShopCard;
