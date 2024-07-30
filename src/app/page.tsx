import Link from 'next/link';
import ProductCard from './components/ProductCard';
import ProductBanner from './ui/product-banner/ProductBanner';
import ProductShowcase from './ui/product-showcase/ProductShowcase';
import CategoryCard from './components/CategoryCard';
import BrowseCategory from './ui/browse-category/BrowseCategory';

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
