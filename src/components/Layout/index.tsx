import React from 'react';
import HeaderTitle from "@/components/HeaderTitle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
        <HeaderTitle />
        <Navbar />
        <main className="container">
          {children}
        </main>
        <Footer />
    </>
  )
}

export default Layout