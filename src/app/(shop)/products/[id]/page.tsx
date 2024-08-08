"use client";

import React from "react";
import { Product, products } from "@/data/seed";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

const Page = ({ params }: Props) => {
  const { id } = params;
  const productId = parseInt(id, 10);
  const product = products.find((product) => product.id === productId);

  const { addProduct, productos } = useCart();
  const {addWishlistProduct, wishlistProducts } = useWishlist();

  if (!product) {
    return <div>Product not found</div>;
  }

  console.log(productos);

  return (
    <main className="m-5">
      <div className="flex flex-col md:flex-row md:space-x-5  md:items-center">
        {/* Imagen del producto */}
        <div className="flex-1 mb-5 md:mb-0 flex justify-center">
          <Image
            src={product.src}
            alt={product.alt}
            className="w-full md:w-[500px] h-auto md:h-[500px] object-cover max-w-md"
          />
        </div>

        {/* Información del producto */}
        <div className="flex-1 px-5">
          <h2 className="font-bold text-4xl mb-4">{product.title}</h2>

          <div className="flex gap-4 items-center mb-4">
            <h3 className="font-medium text-2xl">${product.price}</h3>
            <h3 className="font-medium text-xl line-through text-gray-500">
              ${(product.price + product.price * 0.2).toFixed(2)}
            </h3>
          </div>

          {/* Seleccion de colores */}
          <div className="flex gap-4 items-center mb-4">
            <h4 className="text-sm font-normal">Select color:</h4>
            <div className="flex gap-2">
              <span className="w-6 h-6 rounded-full bg-black hover:bg-opacity-85 cursor-pointer"></span>
              <span className="w-6 h-6 rounded-full bg-purple-700 hover:bg-opacity-85 cursor-pointer"></span>
              <span className="w-6 h-6 rounded-full bg-red-700 hover:bg-opacity-85 cursor-pointer"></span>
              <span className="w-6 h-6 rounded-full bg-orange-400 hover:bg-opacity-85 cursor-pointer"></span>
              <span className="w-6 h-6 rounded-full bg-gray-300 hover:bg-opacity-85 cursor-pointer"></span>
            </div>
          </div>

          <p className="text-xs text-gray-600 font-medium mb-4">
            Enhanced capabilities with a larger 6.7-inch display and all-day
            battery life. Capture incredible photos in both low-light and bright
            conditions with the new dual-camera system.
          </p>

          {/* Botones */}
          <div className="flex flex-col gap-4 lg:flex-row lg:w-full">
            <Link
              href="/products"
              className="text-center text-sm font-medium py-3 px-10 border text-black border-gray-500 rounded-md bg-white transition-all hover:bg-gray-100 lg:w-2/6"
              onClick={() => addWishlistProduct(product)}
            >
              Add to Wishlist
            </Link>

            <Link
              href="/products"
              className="text-center text-sm font-medium py-3 px-10 border text-white border-gray-500 rounded-md bg-black transition-all hover:bg-gray-800 lg:w-2/6"
              onClick={() => addProduct(product)}
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
