import React from "react";
import NavbarMainContainer from "../NavbarComponents/NavbarMainContainer";
import UserSideBar from "./UserSideBar";
import { Outlet } from "react-router-dom";

const UserMainContainer = () => {
  return (
    <section className="bg-primary-color min-h-[100vh] w-[100%]">
      <article>
        <header className="sticky top-0 z-30">
          <NavbarMainContainer />
        </header>
        <main className="h-[calc(100vh-70px)] w-full flex">
          <aside className="w-[14%] h-full bg-secondary-color">
            <UserSideBar />
          </aside>
          <aside className="w-[86%] h-full ">
            <Outlet />
          </aside>
        </main>
      </article>
    </section>
  );
};

export default UserMainContainer;
