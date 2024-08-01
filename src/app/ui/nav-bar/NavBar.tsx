"use client";

import React from "react";
import Link from "next/link";
import Logo from "@/app/components/Logo";
import {
  IoMenu,
  IoHeartOutline,
  IoCartOutline,
  IoPersonOutline,
  IoCart,
  IoHeart
} from "react-icons/io5";
import { useState } from "react";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";

const NavBar = () => {
  const cart = useCart();
  const wishlist = useWishlist();

  return (
    <div className="mx-5 py-5 px-5 flex justify-between items-center">
      <Logo />

      {/* # ICONS MENU RIGHT */}
      <div className="justify-between gap-6 flex items-center">
        <Link href="/cart">
          {cart.productos.length === 0 ? (
            <IoCartOutline className="" size={20} />
          ) : (
            <div className="flex gap-2 items-center relative">
              <IoCart className="" size={20} />
              <span className="text-xs absolute -bottom-3 -right-2">
                {cart.productos.length}
              </span>
            </div>
          )}
        </Link>
        
        <Link href="/wishlist">
        {wishlist.wishlistProducts.length === 0 ? (
            <IoHeartOutline className="" size={20} />
          ) : (
            <div className="flex gap-2 items-center relative">
              <IoHeart className="" size={20} />
              <span className="text-xs absolute -bottom-3 -right-2">
                {wishlist.wishlistProducts.length}
              </span>
            </div>
          )}
        </Link>

        <Link href="/">
          <IoPersonOutline className="" size={20} />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
