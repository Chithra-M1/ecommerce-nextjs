"use client";
import { useQuery } from "@tanstack/react-query";

export function useProducts() {  
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://fakestoreapi.com/products"); 
      if (!res.ok) throw new Error("Failed to fetch products");
      return res.json();
    },
  });
}




