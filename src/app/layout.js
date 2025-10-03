import { Geist, Geist_Mono, Pixelify_Sans, Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import FGFooter from "./components/FGFooter";
import { AppContextProvider } from "@/context/ShopContext.js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pressStart = Press_Start_2P({
  variable:"--font-ps2p",
  subsets:["latin"],
  weight:["400"],
});

const pixelify = Pixelify_Sans({
  subsets:["latin"],
  variable:"--font-pixelify",
    weight:["400"],
})

const VT = VT323({
  subsets:["latin"],
  variable:"--font-vt",
  weight:["400"],
})


export const metadata = {
  title: "FANGAMERZ STORE",
  description: "Productos 100% originales de videojuegos.`",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pixelify.variable} ${pressStart.variable} ${VT.variable} antialiased`}
      >
        <AppContextProvider>
          <NavBar/>
            {children}
          <FGFooter/>
        </AppContextProvider>
      </body>
    </html>
  );
}
