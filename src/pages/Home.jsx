import React from "react";
import AllCourses from "../components/AdminComponents.jsx/AllCourses";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div>
      <section>
        <HeroSection />
      </section>
      <section>
        <header>
          <h1>All Courses</h1>
        </header>
        <main>
          <AllCourses />
        </main>
      </section>
    </div>
  );
};

export default Home;
