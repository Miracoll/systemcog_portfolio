import { shop } from "@/data/data";
import { toast } from "react-toastify";
import { create } from "zustand";

const useShop = create((set) => ({
    products: [{ ...shop[0], qty: 1 }],
    addCart: (product, qty) =>
        set((state) => {
            const isExist = state.products.find((p) => p.id == product.id);

            if (!isExist) {
                toast.success(`${product.title} added to cart`);
                return { products: [...state.products, { ...product, qty }] };
            } else {
                toast.info(`${product.title} - Updated ${qty} qty`);
                return {
                    products: state.products.map((p) =>
                        p.id === product.id ? { ...p, qty } : p
                    ),
                };
            }
        }),
    removeCart: (id) =>
        set((state) => {
            toast.error("Product removed from cart");
            return {
                products: state.products.filter((p) => p.id !== id),
            };
        }),

    updateQty: (id, qty) =>
        set((state) => {
            return {
                products: state.products.map((p) =>
                    p.id === id ? { ...p, qty } : p
                ),
            };
        }),
}));

export default useShop;
