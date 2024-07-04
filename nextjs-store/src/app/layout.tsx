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

      <body className={inter.className}>
      <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
