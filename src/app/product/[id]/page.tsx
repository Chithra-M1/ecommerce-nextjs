"use client";

import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { cartAtom } from "@/app/context/cartAtom";
import { Typography, Card, CardMedia, CardContent, Button, Stack, Container } from "@mui/material";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id ? Number(params.id) : null;
  const [cart, setCart] = useAtom(cartAtom);

  const { data: product, isLoading, error } = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: async () => {
      if (!id) throw new Error("Invalid product ID");
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!res.ok) throw new Error("Product not found");
      return res.json();
    },
    enabled: !!id,
  });

  if (!id) return <Typography color="error">Invalid product ID</Typography>;
  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">Error loading product</Typography>;
  if (!product) return <Typography color="error">Product not found</Typography>;

  const addToCart = () => {
    const newItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    };

    setCart((prevCart) => {
      const updatedCart = Array.isArray(prevCart) ? prevCart : [];
      if (updatedCart.some((item) => item.id === newItem.id)) {
        alert("Item is already in the cart!");
        return updatedCart;
      }
      const newCart = [...updatedCart, newItem];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Card
        sx={{
          background: "linear-gradient(90deg, #ff9a8b, #ff6a88, #ff7eb3)", 
          color: "white",
          width: 400,
          borderRadius: 3,
          boxShadow: 8,
          p: 2,
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{
            height: 350,
            objectFit: "contain",
            borderRadius: 2,
            backgroundColor: "#fff",
            padding: 2, 
          }}
        />

        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>
            {product.title}
          </Typography>

          <Typography variant="body2" sx={{ mt: 2, color: "#fce3db", textAlign: "justify" }}>
            {product.description}
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold", color: "#fbd786", textAlign: "center" }}>
            ${product.price}
          </Typography>

          <Stack spacing={2} sx={{ mt: 3 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff4b5c",
                "&:hover": { backgroundColor: "#d7263d" }, 
              }}
              onClick={addToCart}
              fullWidth
            >
              Add to Cart
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#feb47b",
                color: "#feb47b",
                "&:hover": { backgroundColor: "#feb47b", color: "white" }, 
              }}
              onClick={() => router.push("/cart")}
              fullWidth
            >
              View Cart
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}






