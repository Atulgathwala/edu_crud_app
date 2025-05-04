import React, { useContext } from "react";
import { CourseContextApi } from "../../context/CourseContext";
import { PiSealWarning } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AllCourses = () => {
  const { allCourses } = useContext(CourseContextApi);

  return (
    <section className="p-[20px] flex flex-wrap gap-[30px] justify-center">
      {allCourses?.map((course) => (
        <div
          key={course.id}
          className="w-[380px] rounded-[15px] bg-white shadow-lg overflow-hidden border"
        >
          <div className="relative w-full h-[200px]">
            <img
              src={course.courseThumbnail}
              alt={course.courseTitle}
              className="w-full h-full object-cover"
            />
            <NavLink
              to={`/course/${course.id}`}
              state={{ course }}
              className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white p-[10px] rounded-full"
            >
              <img
                src="https://i.ibb.co/hK6KDMt/play.png"
                alt="play"
                className="h-[50px] w-[50px]"
              />
            </NavLink>
          </div>

          <div className="p-[15px]">
            <h2 className="text-[20px] font-[700]">{course.courseTitle}</h2>
            <p className="text-[14px] text-gray-600 mt-[8px]">
              {course.courseDescription}
            </p>
            <p className="text-[14px] mt-[8px]">
              Trainer: <b>{course.courseTrainer}</b>
            </p>

            <div className="flex justify-between items-center text-[14px] mt-[10px] text-gray-700">
              <span className="flex items-center gap-[5px]">
                <PiSealWarning className="text-blue-600" />
                {course.courseDuration} mins
              </span>

              <span className="flex items-center gap-[5px]">
                <FaUsers /> {course.videos.length} videos
              </span>
            </div>
          </div>

          <div className="p-[15px] flex justify-between items-center">
            <NavLink
              to={`/course/${course.id}`}
              state={{ course }}
              className="bg-blue-600 text-white px-[20px] py-[8px] rounded-[10px] font-[600]"
            >
              View Course
            </NavLink>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AllCourses;
