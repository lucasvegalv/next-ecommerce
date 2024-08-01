import React from "react";
import CartProducts from "@/app/components/CartProducts";

const CartPage = () => {
  return (
    <main className="m-5">
      <h3 className="font-bold">Shopping Cart</h3>
      <CartProducts />
    </main>
  );
};

export default CartPage;
