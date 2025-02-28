"use client"; 

import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { cartAtom } from "../context/cartAtom";
import CartItem from "../components/CardItem";
import { Grid, Typography, Container } from "@mui/material";

interface CartItemType {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function CartPage() {
  const [cart, setCart] = useAtom<CartItemType[]>(cartAtom);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]") as CartItemType[];
    setCart(storedCart);
  }, [setCart]);

  return (
    <Container sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4" sx={{ color: "white", mb: 3, fontWeight: "bold" }}>
        Shopping Cart
      </Typography>

      {cart.length > 0 ? (
        <Grid container spacing={3} justifyContent="center">
          {cart.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <CartItem item={item} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" sx={{ color: "gray", mt: 3 }}>
          Your cart is empty.
        </Typography>
      )}
    </Container>
  );
}






