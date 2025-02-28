"use client";
import Link from "next/link";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card
      sx={{
        background: "linear-gradient(90deg, #ff9a8b, #ff6a88, #ff7eb3)", 
        color: "white",
        width: 350, 
        height: 450, 
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
        image={product.image}
        alt={product.title}
        sx={{
          height: 250, 
          width: "100%", 
          objectFit: "contain", 
          padding: 2, 
        }}
      />

      <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
       
        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1rem" }}>
          {product.title}
        </Typography>

       
        <Typography variant="body1" sx={{ color: "#fbd786", mt: 1 }}> 
          ${product.price}
        </Typography>

        
        <Box sx={{ mt: 2 }}>
          <Link
            href={`/product/${product.id}`}
            style={{
              color: "#ff4b5c",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "color 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#d7263d")} 
            onMouseLeave={(e) => (e.currentTarget.style.color = "#ff4b5c")}
          >
            View Details
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
}





