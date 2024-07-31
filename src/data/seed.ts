export interface Product {
  id: number;
  src: string;
  alt: string;
  title: string;
  price: number;
  btnHref: string;
  onWishlist?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    src: "https://icenter.ar/wp-content/uploads/2024/06/ip-13-usado.png",
    alt: "iPhone 14 Pro",
    title: "iPhone 14 Pro 128GB",
    price: 990,
    btnHref: "/",
    onWishlist: false,
  },
  {
    id: 2,
    src: "https://icenter.ar/wp-content/uploads/2023/06/Iphone-13-Pro.7-e1685919445305.png",
    alt: "iPhone 13 Pro 64GB",
    title: "iPhone 13 Pro 64GB",
    price: 550,
    btnHref: "/",
    onWishlist: false,
  },
  {
    id: 3,
    src: "https://icenter.ar/wp-content/uploads/2024/06/iphone-14-plus-starlight-select-202209.png",
    alt: "iPhone 14 Plus 364GB",
    title: "iPhone 14 Plus 364GB",
    price: 1490,
    btnHref: "/",
    onWishlist: false,
  },
  {
    id: 4,
    src: "https://icenter.ar/wp-content/uploads/2023/06/iphone-13-pro-max-silver-select-e1685919393409.png",
    alt: "iPhone 13 Pro Max",
    title: "iPhone 13 Pro",
    price: 550,
    btnHref: "/",
    onWishlist: false,
  },
  {
    id: 5,
    src: "https://icenter.ar/wp-content/uploads/2023/06/iphone-14-pro-1.png-e1685919794697.webp",
    alt: "iPhone 14 Pro",
    title: "iPhone 14 Pro",
    price: 499,
    btnHref: "/",
    onWishlist: false,
  },
  {
    id: 6,
    src: "https://icenter.ar/wp-content/uploads/2023/06/macbook-pro-13.png",
    alt: "MacBook Pro",
    title: "MacBook Pro",
    price: 549,
    btnHref: "/",
    onWishlist: false,
  },
  {
    id: 7,
    src: "https://icenter.ar/wp-content/uploads/2023/06/MPLV3ref_VW_PFwatch-44-alum-starlight-nc-se_VW_PF_WF_SI.png",
    alt: "Apple Watch",
    title: "Apple Watch",
    price: 3499,
    btnHref: "/",
    onWishlist: false,
  },
  {
    id: 8,
    src: "https://icenter.ar/wp-content/uploads/2023/06/Comprar-iPad-Air-Chivilcoy-e1685932767987.png",
    alt: "iPad Air",
    title: "iPad Air",
    price: 1299,
    btnHref: "/",
    onWishlist: false,
  },
  {
    id: 9,
    src: "https://icenter.ar/wp-content/uploads/2024/04/iphone-15-pro-max-silicone-case-with-magsafe-storm-blue_MT1P3_1445x.webp",
    alt: "iPhone 15 Pro Case",
    title: "iPhone Case",
    price: 399,
    btnHref: "/",
    onWishlist: false,
  },
  {
    id: 10,
    src: "https://icenter.ar/wp-content/uploads/2023/06/MPLV3ref_VW_PFwatch-44-alum-starlight-nc-se_VW_PF_WF_SI.png",
    alt: "Apple Watch",
    title: "Apple Watch",
    price: 3499,
    btnHref: "/",
    onWishlist: false,
  },
  {
    id: 11,
    src: "https://icenter.ar/wp-content/uploads/2023/06/macbook-pro-13.png",
    alt: "MacBook Pro",
    title: "MacBook Pro",
    price: 549,
    btnHref: "/",
    onWishlist: false,
  },
  {
    id: 12,
    src: "https://icenter.ar/wp-content/uploads/2023/06/iphone-14-pro-1.png-e1685919794697.webp",
    alt: "iPhone 14 Pro",
    title: "iPhone 14 Pro",
    price: 499,
    btnHref: "/",
    onWishlist: false,
  },
];
