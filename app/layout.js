import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import Topbar from "@/components/Common/Topbar";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import connectToDb from '../utils/dbConnect'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AnabolicHub",
  description: "",
};

export default function RootLayout({ children }) {
  connectToDb()
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={inter.className}>
        <Topbar/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
    </ClerkProvider>
  );
}
