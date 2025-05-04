import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaUserAlt, FaUsers } from "react-icons/fa";
import { ImBooks, ImFilePicture } from "react-icons/im";
import { IoIosUnlock } from "react-icons/io";
import { MdAccountBalanceWallet, MdOutlineDeleteForever } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { NavLink } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <section>
      <article className="p-8 text-[18px]">
        <ul className="flex flex-col gap-3">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 py-2 rounded-md shadow-xl "
                  : `flex items-center gap-2 py-2 rounded-md `
              }
              to={"/admin"}
              end
              style={({ isActive }) => ({
                backgroundColor: isActive && "#1d6cf4",
                paddingLeft: isActive && "10px",
                marginLeft: isActive && "5px",
                color: isActive && "white",
              })}
            >
              {" "}
              <span>
                <AiOutlineDashboard />
              </span>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 py-2 rounded-md shadow-xl "
                  : `flex items-center gap-2 py-2 rounded-md `
              }
              to={"/admin/create-course"}
              style={({ isActive }) => ({
                backgroundColor: isActive && "#1d6cf4",
                paddingLeft: isActive && "10px",
                color: isActive && "white",
              })}
            >
              {" "}
              <span>
                <ImBooks />
              </span>
              <span>Create Courses</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 py-2 rounded-md shadow-xl "
                  : `flex items-center gap-2 py-2 rounded-md `
              }
              to={"/admin/all-courses"}
              style={({ isActive }) => ({
                backgroundColor: isActive && "#1d6cf4",
                paddingLeft: isActive && "10px",
                color: isActive && "white",
              })}
            >
              {" "}
              <span>
                <SiBookstack />
              </span>
              <span>All Courses</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 py-2 rounded-md shadow-xl "
                  : `flex items-center gap-2 py-2 rounded-md `
              }
              to={"/admin/all-users"}
              style={({ isActive }) => ({
                backgroundColor: isActive && "#1d6cf4",
                paddingLeft: isActive && "10px",
                color: isActive && "white",
              })}
            >
              {" "}
              <span>
                <FaUsers />
              </span>
              <span>All Users</span>
            </NavLink>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default AdminSideBar;
