// src/app/layout.js
"use client";
import Navigation from "./components/navigation";

import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const path = usePathname();
  const noNavPaths = ["/"];
  const showNav = !noNavPaths.includes(path);
  console.log("current path is ", path);
  return (
    <html lang="en">
      <body>
        {/* Conditional rendering based on showNav prop */}
        {showNav && <Navigation />}
        <main>{children}</main>
      </body>
    </html>
  );
}
