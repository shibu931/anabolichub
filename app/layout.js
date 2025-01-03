import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import Topbar from "@/components/Common/Topbar";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster"
import { CartProvider } from '.././context/CartContext'
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Buy Anabolic Steroids Online in Germany - Top Quality',
  description: 'Explore premium anabolic steroids in Germany. Buy online with confidence, top quality guaranteed, and fast shipping across Europe. Achieve your fitness goals today!',
  keywords: 'buy anabolic steroids, steroids, oral steroids, Testosterone, post cycle therapy, Serm, anabolic hub, buy steroids',
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'Buy Anabolic Steroids Online in Germany - Top Quality',
    description: 'Explore premium anabolic steroids in Germany. Buy online with confidence, top quality guaranteed, and fast shipping across Europe. Achieve your fitness goals today!',
    url: 'https://anabolichub.com/', 
    site_name: 'Anabolic Hub',
    images: [
      {
        url: 'https://anabolichub.com/assets/logo.jpeg', 
        width: 979,
        height: 511,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy Anabolic Steroids Online in Germany - Top Quality',
    description: 'Explore premium anabolic steroids in Germany. Buy online with confidence, top quality guaranteed, and fast shipping across Europe. Achieve your fitness goals today!',
    creator: 'Admin', 
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
        <meta name="google-site-verification" content="aBtl_Sc0eXTHvDhvHGxteXDC4t-3-40Tzg3-J9CgRjs" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-C81SSYW094"></Script>
        <Script>
          {
            `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C81SSYW094');
            `
          }
        </Script>
        </head>
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
