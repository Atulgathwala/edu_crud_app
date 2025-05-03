import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { ImFilePicture } from "react-icons/im";
import { IoIosUnlock } from "react-icons/io";
import { MdAccountBalanceWallet, MdOutlineDeleteForever } from "react-icons/md";
import { NavLink } from "react-router-dom";

const UserSideBar = () => {
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
              to={"/user-profile"}
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
                <MdAccountBalanceWallet />
              </span>
              <span>My Account</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 py-2 rounded-md shadow-xl "
                  : `flex items-center gap-2 py-2 rounded-md `
              }
              to={"/user-profile/update-profile-picture"}
              style={({ isActive }) => ({
                backgroundColor: isActive && "#1d6cf4",
                paddingLeft: isActive && "10px",
                color: isActive && "white",
              })}
            >
              {" "}
              <span>
                <ImFilePicture />
              </span>
              <span>Profile picture</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 py-2 rounded-md shadow-xl "
                  : `flex items-center gap-2 py-2 rounded-md `
              }
              to={"/user-profile/add-profile"}
              style={({ isActive }) => ({
                backgroundColor: isActive && "#1d6cf4",
                paddingLeft: isActive && "10px",
                color: isActive && "white",
              })}
            >
              {" "}
              <span>
                <FaUserAlt />
              </span>
              <span>Add profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 py-2 rounded-md shadow-xl "
                  : `flex items-center gap-2 py-2 rounded-md `
              }
              to={"/user-profile/change-password"}
              style={({ isActive }) => ({
                backgroundColor: isActive && "#1d6cf4",
                paddingLeft: isActive && "10px",
                color: isActive && "white",
              })}
            >
              {" "}
              <span>
                <IoIosUnlock />
              </span>
              <span>Change Password</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 py-2 rounded-md shadow-xl "
                  : `flex items-center gap-2 py-2 rounded-md `
              }
              to={"/user-profile/delete-account"}
              style={({ isActive }) => ({
                backgroundColor: isActive && "red",
                paddingLeft: isActive && "10px",
                color: isActive && "white",
              })}
            >
              {" "}
              <span>
                <MdOutlineDeleteForever />
              </span>
              <span>Delete Account</span>
            </NavLink>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default UserSideBar;
