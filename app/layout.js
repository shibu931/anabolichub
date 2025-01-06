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
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const breadCrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement":
    [
      {
        "@type": "ListItem", 
        "position": 1, 
        "name": "Anabolic Hub",
        "item": "https://anabolichub.com/"  
      },{
        "@type": "ListItem", 
        "position": 2, 
        "name": "Anabolic Hub Reviews",
        "item": "https://anabolichub.com/reviews"  
      }
    ]
}

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "DiagnosticLab",
  name: "Anabolic Hub",
  alternateName: "Anabolic Hub",
  url: "https://anabolichub.com/",
  logo: "https://anabolichub.com/assets/logo.jpeg"
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <Script
            id="bnreadcrumb-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(breadCrumbSchema),
            }}
          />
          <Script
            id="org-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(orgSchema),
            }}
          />
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
