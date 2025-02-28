import { atom } from "jotai";


export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
}


const storedCart: CartItem[] =
  typeof window !== "undefined" ? JSON.parse(localStorage.getItem("cart") || "[]") : [];

export const cartAtom = atom<CartItem[]>(storedCart);




