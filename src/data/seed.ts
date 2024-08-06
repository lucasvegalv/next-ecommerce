import { StaticImageData } from "next/image";
import image1 from '@/../public/shop/product_1.webp'
import image2 from '@/../public/shop/product_2.webp'
import image3 from '@/../public/shop/product_3.webp'
import image4 from '@/../public/shop/product_4.webp'
import image5 from '@/../public/shop/product_5.webp'
import image6 from '@/../public/shop/product_6.webp'
import image7 from '@/../public/shop/product_7.webp'
import image8 from '@/../public/shop/product_8.webp'
import image9 from '@/../public/shop/product_9.webp'

export interface Product {
  id: number;
  src: StaticImageData;
  alt: string;
  title: string;
  price: number;
  btnHref: string;
  onWishlist?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    src: image1,
    alt: "iPhone 14 Pro",
    title: "iPhone 14 Pro 128GB",
    price: 990,
    btnHref: "/",
    onWishlist: false,
  },
  {
    id: 2,
    src: image2,
    alt: "iPhone 13 Pro 64GB",
    title: "iPhone 13 Pro 64GB",
    price: 550,
    btnHref: "/",
    onWishlist: false,
  },
  {
    id: 3,
    src: image3,
    alt: "iPhone 14 Plus 364GB",
    title: "iPhone 14 Plus 364GB",
    price: 1490,
    btnHref: "/",
    onWishlist: false,
  },
  {
    id: 4,
    src: image4,
    alt: "iPhone 13 Pro Max",
    title: "iPhone 13 Pro",
    price: 550,
    btnHref: "/",
    onWishlist: false,
  },
  {
    id: 5,
    src: image5,
    alt: "iPhone 14 Pro",
    title: "iPhone 14 Pro",
    price: 499,
    btnHref: "/",
    onWishlist: false,
  },
  {
    id: 6,
    src: image6,
    alt: "MacBook Pro",
    title: "MacBook Pro",
    price: 549,
    btnHref: "/",
    onWishlist: false,
  },
  {
    id: 7,
    src: image7,
    alt: "Apple Watch",
    title: "Apple Watch",
    price: 3499,
    btnHref: "/",
    onWishlist: false,
  },
  {
    id: 8,
    src: image8,
    alt: "iPad Air",
    title: "iPad Air",
    price: 1299,
    btnHref: "/",
    onWishlist: false,
  },
  {
    id: 9,
    src: image9,
    alt: "iPhone 15 Pro Case",
    title: "iPhone Case",
    price: 399,
    btnHref: "/",
    onWishlist: false,
  },
  {
    id: 10,
    src: image7,
    alt: "Apple Watch",
    title: "Apple Watch",
    price: 3499,
    btnHref: "/",
    onWishlist: false,
  },
  {
    id: 11,
    src: image6,
    alt: "MacBook Pro",
    title: "MacBook Pro",
    price: 549,
    btnHref: "/",
    onWishlist: false,
  },
  {
    id: 12,
    src: image3,
    alt: "iPhone 14 Pro",
    title: "iPhone 14 Pro",
    price: 499,
    btnHref: "/",
    onWishlist: false,
  },
];
