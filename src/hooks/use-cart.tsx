import { Product } from "@/data/seed";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
  productos: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  removeAll: () => void;
}

export const useCart = create<CartStore>(
  persist<CartStore>(
    (set, get) => ({
      productos: [],
      addProduct: (product: Product) => {
        const currentProducts = get().productos;
        const existingProduct = currentProducts.find(
          (currentProduct) => currentProduct.id === product.id
        );

        if (existingProduct) {
          console.log("Producto ya en el carrito!");
          return;
        }

        set((state) => ({
          productos: [...state.productos, product],
        }));
      },

      removeProduct: (id: number) => {
        set((state) => ({
          productos: state.productos.filter((product) => product.id !== id),
        }));

        console.log("Producto eliminado del carrito!");
      },

      removeAll: () => {
        set({ productos: [] });

        console.log("Todos los productos han sido eliminados del carrito!");
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
