import ProductList from "./components/ProductList";
import { Box, Typography, Container, Divider, Grid } from "@mui/material";

export default function Home() {
    return (
        <main>
            
            <Box sx={{ position: "relative", width: "100%", height: "60vh", overflow: "hidden" }}>
                
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                >
                    <source src="/banner-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay Content */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        color: "white",
                        flexDirection: "column",
                        px: 2,
                    }}
                >
                    <Typography variant="h3" fontWeight="bold">
                        Welcome to ALLORA Store
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 1, maxWidth: "600px" }}>
                        Discover the best products at unbeatable prices.
                    </Typography>
                </Box>
            </Box>

           
           
            <Container sx={{ mt: 6 }}>
                <Grid container spacing={4} alignItems="center">
                   
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src="/logo.png" 
                            alt="About Us"
                            sx={{
                                width: "100%",
                                borderRadius: 2,
                                boxShadow: 3,
                            }}
                        />
                    </Grid>

                  
                    <Grid item xs={12} md={6} textAlign="left">
                        <Typography variant="h4" fontWeight="bold">
                            About Us
                        </Typography>
                        <Divider sx={{ width: "80px", height: "4px", backgroundColor: "#ff7e5f", my: 2 }} />
                        <Typography variant="body1" sx={{ color: "gray", lineHeight: 1.6 }}>
                            At ALLORA, we take pride in being your one-stop shop for high-quality, stylish, and affordable products. Whether you're looking for the latest fashion trends, cutting-edge electronics, or essential home products, we’ve got you covered. Our diverse collection is carefully curated to ensure you get the best in terms of design, durability, and value.

                            Shopping at ALLORA is more than just making a purchase—it’s about enjoying a seamless and satisfying retail experience. Our platform is designed to be user-friendly, secure, and efficient, making online shopping effortless for everyone. We offer secure payment gateways, lightning-fast delivery, and top-notch customer service, ensuring that your needs are met with the highest level of professionalism.

                            Our commitment to excellence goes beyond just selling products—we prioritize customer satisfaction, reliability, and trust. 
                        </Typography>
                    </Grid>
                </Grid>
            </Container>



            <Container sx={{ mt: 6, textAlign: "center" }}>
                <Typography variant="h4" fontWeight="bold">
                    Why Choose ALLORA?
                </Typography>
                <Divider sx={{ width: "80px", height: "4px", backgroundColor: "#ff7e5f", mx: "auto", my: 2 }} />

                <Grid container spacing={4} sx={{ mt: 4 }}>

                    <Grid item xs={12} sm={4}>
                        <Box sx={{ p: 3, boxShadow: 3, borderRadius: 2, backgroundColor: "#fff", textAlign: "center" }}>
                            <Typography variant="h6" fontWeight="bold">
                                🌍 Global Collection
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
                                Our store features the latest trends and global products curated just for you.
                            </Typography>
                        </Box>
                    </Grid>


                    <Grid item xs={12} sm={4}>
                        <Box sx={{ p: 3, boxShadow: 3, borderRadius: 2, backgroundColor: "#fff", textAlign: "center" }}>
                            <Typography variant="h6" fontWeight="bold">
                                🚀 Fast Shipping
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
                                Get your orders delivered swiftly with our reliable and fast shipping service.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Box sx={{ p: 3, boxShadow: 3, borderRadius: 2, backgroundColor: "#fff", textAlign: "center" }}>
                            <Typography variant="h6" fontWeight="bold">
                                🛡️ Secure Payments
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
                                We use the latest security measures to ensure safe transactions.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>


            <Container sx={{ mt: 6 }}>
                <ProductList />
            </Container>
        </main>
    );
}



