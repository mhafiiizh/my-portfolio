import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Profile | Hafizh",
  description: "Web Portfolio Muhammad Hafizh Ihsan",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <script
          src='https://kit.fontawesome.com/840c16d778.js'
          crossOrigin='anonymous'
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
