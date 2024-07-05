import {Roboto} from "next/font/google"
import { Header } from "./store/components/shared/Header";
import { Footer } from "./store/components/shared/Footer/Footer";
import { Hero } from "./store/components/home/Hero";
import { Description } from "./store/components/home/Description";

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
      <Hero/>
      <Description/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
