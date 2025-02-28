"use client";
import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "./Productcard";
import { Grid, Container, TextField, MenuItem, Pagination, Box } from "@mui/material";
import { useTheme } from "../components/ThemeProvider"; // Import dark mode context

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

const categories = ["All", "Electronics", "Fashion", "Home", "Books", "Beauty"];

export default function ProductList() {
  const { data: products, isLoading } = useProducts();
  const { darkMode } = useTheme(); 
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  if (isLoading) return <p>Loading...</p>;
  if (!products || products.length === 0) return <p>No products found</p>;

  const filteredProducts = products.filter((product: Product) => {
    const matchesCategory = category === "All" || product.category.toLowerCase() === category.toLowerCase();
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = filteredProducts.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <Container sx={{ mt: 4 }}>
      
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3} gap={2}>
        <TextField
          select
          label="Filter by Category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1);
          }}
          variant="outlined"
          size="small"
          sx={{ minWidth: 200 }}
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Search by Name"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(1);
          }}
          sx={{ flex: 1, maxWidth: 300 }}
        />
      </Box>

      
      <Grid container spacing={3}>
        {displayedProducts.map((product: Product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

     
      {totalPages > 1 && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(event, value) => setPage(value)}
            color="primary"
            sx={{
              "& .MuiPaginationItem-root": {
                color: darkMode ? "#FFD700" : "#000", 
                backgroundColor: darkMode ? "#333" : "transparent", 
                borderRadius: "8px",
              },
              "& .MuiPaginationItem-root.Mui-selected": {
                backgroundColor: darkMode ? "#555" : "#1976d2", 
                color: "#fff",
              },
              "& .MuiPaginationItem-root:hover": {
                backgroundColor: darkMode ? "#444" : "#ddd",
              },
            }}
          />
        </Box>
      )}
    </Container>
  );
}







