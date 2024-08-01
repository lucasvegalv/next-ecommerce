import WishlistProducts from "@/app/components/WishlistProducts";
import { Product } from "@/data/seed";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface WishlistStore {
  wishlistProducts: Product[];
  addWishlistProduct: (product: Product) => void;
  removeWishlistProduct: (product: Product) => void;
  removeAllWishlist: () => void;
}

export const useWishlist = create<WishlistStore>(
  persist<WishlistStore>(
    (set, get) => ({
      wishlistProducts: [],
      addWishlistProduct: (product: Product) => {
        const currentProducts = get().wishlistProducts;
        const existingProduct = currentProducts.find(
          (currentProduct) => currentProduct.id === product.id
        );

        if (existingProduct) {
          console.log("Producto ya en la wishlist!");
          return;
        }

        set((state) => ({
          wishlistProducts: [...state.wishlistProducts, product]
        }));

        product.onWishlist = !product.onWishlist;
         
      },

      removeWishlistProduct: (product: Product) => {
        
        set((state) => ({
          wishlistProducts: state.wishlistProducts.filter(
            (p) => p.id !== product.id
          ),
        }));

        product.onWishlist = !product.onWishlist;


        

        console.log("Producto eliminado de la wishlist!");
      },

      removeAllWishlist: () => {
        set({ wishlistProducts: [] });

        console.log("Todos los productos han sido eliminados de la wishlist!");
      },
    }),
    {
      name: "wishlist-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
