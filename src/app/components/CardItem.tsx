"use client";
import { useAtom } from "jotai";
import { cartAtom } from "../context/cartAtom";
import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";

interface CartItemProps {
  item: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
}

export default function CartItem({ item }: CartItemProps) {
  const [cart, setCart] = useAtom(cartAtom);

  const removeFromCart = () => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id)); 
  };

  return (
    <Card
      sx={{
        background: "linear-gradient(90deg, #ff9a8b, #ff6a88, #ff7eb3)", 
        color: "white",
        width: 350, 
        height: 500, 
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
     
      <CardMedia
        component="img"
        image={item.image}
        alt={item.title}
        sx={{
          height: 250, 
          width: "100%", 
          objectFit: "contain", 
          padding: 2, 
        }}
      />

      <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
        
        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1rem" }}>
          {item.title}
        </Typography>

        <Typography variant="body1" sx={{ color: "#fbd786", mt: 1 }}> 
          ${item.price}
        </Typography>

        
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff4b5c", 
              "&:hover": { backgroundColor: "#d7263d" },
              fontWeight: "bold",
            }}
            onClick={removeFromCart}
          >
            Remove
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}



  
  