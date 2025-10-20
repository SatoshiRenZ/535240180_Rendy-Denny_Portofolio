import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./component/header";
import Footer from "./component/footer";

const poppins = Poppins({
  subsets: [ "latin" ],
  weight: [ "300", "500", "600", "700", "800" ],
})

export const metadata: Metadata = {
  title: "Portofolio - Rendy Denny",
  description: "Portofolio Profesional Keamanan Siber",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" 
        />
      </head>
      <body
        className={poppins.className}
      >
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
