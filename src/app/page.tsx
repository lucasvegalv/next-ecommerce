import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";
import ProductBanner from "./ui/product-banner/ProductBanner";
import ProductShowcase from "./ui/product-showcase/ProductShowcase";
import BrowseCategory from "./ui/browse-category/BrowseCategory";

export default function Home() {
  return (
    <main className="bg-white flex flex-col justify-between items-center m-0 m-auto">
      {/*NAV BAR*/}

      {/*PRODUCT BANNER*/}
      <ProductBanner />

      {/*PRODUCTS*/}
      {/* TO DO --> Pasarle por props un listado de productos al ui component*/}
      <ProductShowcase />

      {/*BROWSE CATEGORY*/}
      <BrowseCategory />
    </main>
  );
}
