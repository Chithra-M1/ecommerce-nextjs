"use client"; // ✅ Keep "use client" at the top

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Inter } from "next/font/google";

import { ThemeProvider } from "./components/ThemeProvider"; 
import Navbar from "./components/navbar"; 
import Footer from "./components/footer";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [queryClient] = useState(() => new QueryClient()); 

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <QueryClientProvider client={queryClient}> 
          <ThemeProvider> 
            <Navbar/>
            {children}
            <Footer/>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}


