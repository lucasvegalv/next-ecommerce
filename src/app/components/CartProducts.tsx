"use client";

import { useCart } from "@/hooks/use-cart";
import React from "react";
import Link from "next/link";

const CartProducts = () => {
  const { removeProduct } = useCart();
  const cart = useCart();
  let total = 0;

  cart.productos.map((producto) => {
    total += producto.price;
  });

  return (
    <div className="flex flex-col md:flex-row justify-between">
      {/* Lista de productos */}
      <div className=" justify-center space-y-4 md:space-y-6 ">
        {cart.productos.map((producto) => (
          <div
            key={producto.id}
            className="flex flex-row justify-between items-center border-b-2 items-start md:items-center p-5"
          >
            {/* Imagen */}
            <div className="flex-shrink-0 mb-4 md:mb-0 md:w-1/3">
              <img
                src={producto.src}
                alt={producto.alt}
                width={200}
                height={200}
              />
            </div>

            {/* Detalles del producto */}
            <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="flex-1">
                <h3 className="text-left text-sm">{producto.title}</h3>
                <h4 className="text-left font-bold text-lg">
                  ${producto.price}
                </h4>
              </div>
              <button
                className="mt-4 md:mt-0 text-center text-sm font-medium py-3 px-10 border text-white border-gray-500 rounded-md bg-black transition-all hover:bg-gray-800"
                onClick={() => removeProduct(producto.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Resumen del pedido */}
      <div className="flex-shrink-0 md:w-1/3 mt-4 md:mt-0 md:ml-6 h-full">
        <div className="border p-4">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-4">
            <h3 className="text-sm">Order Total:</h3>
            <h4 className="text-sm font-bold">${total.toFixed(2)}</h4>
          </div>
          <Link href="/checkout">
            <button className="w-full text-center text-sm font-medium py-3 px-10 border text-white border-gray-500 rounded-md bg-black transition-all hover:bg-gray-800">
              Buy
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartProducts
