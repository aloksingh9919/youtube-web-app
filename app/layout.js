"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Menubar from "./components/Menubar";
import Header from "./components/Header";
import Smallmenu from "./components/SmallMenu";
import Bottombar from"./components/Bottombar";
import { useState } from "react";

// import Searchbar from "./components/Searchbar";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  const [View, setView] = useState(false);
  const [hide, sethide] = useState(true);
  const clickhendle = () => {
    setView(!View);
    sethide(!hide);
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header clickhendle={clickhendle} />
        <main className="flex">
          <Menubar View={View} />
          <div className="max-md:fixed max-md:bottom-0  ">
          <Smallmenu hide={hide} className="" />
            
          </div>
          <div className="main-container ">{children}</div>
        </main>
        <div className="fixed bottom-[-1px] w-full">
          <Bottombar/>
        </div>
      </body>
    </html>
  );
}
