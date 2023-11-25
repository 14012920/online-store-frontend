import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Navbar from "./nav-bar";
import Footer from "./footer";

const Layout = ({ children, cartCount }) => {
  return (
    <>
      <Navbar cartCount={cartCount} />
      <main>
        <div className="bg-white min-h-screen ">{children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default Layout;
