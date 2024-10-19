"use client";
import "./globals.css";
import MenuPage from "./components/Menu";

import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <body>
        {/* {pathName != "./login" ? <MenuPage /> : null} */}
        {children}
      </body>
    </html>
  );
}
