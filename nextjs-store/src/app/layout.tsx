import {Roboto} from "next/font/google"
import { Header } from "../components/shared/Header";
import { Footer } from "../components/shared/Footer/Footer";
import { Hero } from "../components/home/Hero";
import { Description } from "../components/home/Description";

const roboto = Roboto({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`m-0 p-0 bg-primary-color text-text-color ${roboto.className}`}>
      <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
