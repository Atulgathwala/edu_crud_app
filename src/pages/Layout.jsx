import React from "react";
import NavbarMainContainer from "../components/NavbarComponents/NavbarMainContainer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <section className="bg-primary-color min-h-[100vh]">
      <NavbarMainContainer />
      <Outlet />
      <Toaster />
    </section>
  );
};

export default Layout;
