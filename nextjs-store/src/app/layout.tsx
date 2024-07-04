import { Inter } from "next/font/google";
import { Header } from "./store/components/shared/Header";
import { Footer } from "./store/components/shared/Footer/Footer";



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className="m-0 p-0 bg-primary-color text-text-color">
      <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
