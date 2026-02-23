import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Header />
      <main className="flex-1 pb-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
