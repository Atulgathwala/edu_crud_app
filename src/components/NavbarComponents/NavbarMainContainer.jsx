import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const NavbarMainContainer = () => {
  return (
    <section className="h-[70px] w-[100%] shadow-md ">
      <article className="h-full w-[95%]   m-auto flex justify-between items-center ">
        <aside>
          <Logo />
        </aside>
        <aside>
          <Menu />
        </aside>
      </article>
    </section>
  );
};

export default NavbarMainContainer;
