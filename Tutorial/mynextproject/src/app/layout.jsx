import Navbar from "@/src/components/Navbar";
import { Roboto } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "My App",
  description: "Página principal de mi tienda",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
