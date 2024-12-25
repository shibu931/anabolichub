import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import Topbar from "@/components/Common/Topbar";
import { ClerkProvider } from "@clerk/nextjs";
import connectToDb from '../utils/dbConnect'
import { Toaster } from "@/components/ui/toaster"
import { CartProvider } from '.././context/CartContext'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AnabolicHub",
  description: "HEllo",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>

              <CartProvider>
                <Topbar />
                <Navbar />
                {children}
                <Footer />
                <Toaster />
              </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
