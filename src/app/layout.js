

import { Inter, Sora } from "next/font/google";
import "./globals.css";
// import HeaderMain from "@/componunts/HeaderMain";
import HeaderTop from "@/componunts/HeaderTop";
import HeaderBottom from "@/componunts/HeaderBottom";
import SingalProduct from "@/componunts/SingalProduct";

import ProductCard2 from "@/componunts/ProductCard2";
import Subscription from "@/componunts/Subscription";
import Offer from "@/componunts/Offer";
import ProductCard1 from "@/componunts/ProductCard1";
import Footer from "@/componunts/Footer";

// import MainSection from "@/componunts/MainSection";
// import Footer from "@/componunts/Footer";

const sora = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <div className="w-5/6 mx-auto overflow-hidden ">
          {children}
           <HeaderTop />
           <HeaderBottom />
           <SingalProduct/>
           <ProductCard1/>
           <ProductCard2/>
           <Subscription/>
           <Offer/>
           <Footer/>
         
          
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
