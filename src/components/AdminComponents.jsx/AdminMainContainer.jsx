import React from "react";
import AdminSideBar from "./AdminSideBar";
import NavbarMainContainer from "../NavbarComponents/NavbarMainContainer";
import { Outlet } from "react-router-dom";

const AdminMainContainer = () => {
  return (
    <section className="h-screen w-full flex flex-col">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-20">
        <NavbarMainContainer />
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sticky Sidebar (vertical sticky won't work unless sidebar content scrolls) */}
        <aside className="w-[14%] bg-secondary-color h-full overflow-y-auto">
          <AdminSideBar />
        </aside>

        {/* Scrollable Content Area */}
        <main className="w-[86%] h-full overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default AdminMainContainer;
