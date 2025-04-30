import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <section className="w-[60%]  h-screen fixed z-10 top-0 left-70">
      <div className="container">
        <div className="loader"></div>
      </div>
    </section>
  );
};

export default Spinner;
