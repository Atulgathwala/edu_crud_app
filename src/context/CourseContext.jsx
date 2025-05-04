import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export let CourseContextApi = createContext(null);

const CourseContext = ({ children }) => {
  let [allCourses, setAllCourses] = useState(null);

  let fetchAllCourses = async () => {
    try {
      let { data } = await axios.get("http://localhost:5200/courses-data");

      console.log("videoss", data);
      setAllCourses(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);
  return (
    <CourseContextApi.Provider value={{ allCourses }}>
      {children}
    </CourseContextApi.Provider>
  );
};

export default CourseContext;
