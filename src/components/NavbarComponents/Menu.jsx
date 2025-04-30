import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContextAPI } from "../../context/AuthContext";

const Menu = () => {
  let { state, authUser, signOut } = useContext(AuthContextAPI);

  return (
    <section>
      <ul className="flex text-button-color gap-2  h-[70px] items-center ">
        <li className="flex items-center">
          <NavLink
            className="py-2 px-4 rounded-md"
            to={"/"}
            style={({ isActive }) => ({
              backgroundColor: isActive && "#6300a3",
              color: isActive && "white",
            })}
          >
            Home
          </NavLink>
        </li>
        {authUser !== null || window.localStorage.getItem("USERLOGIN") ? (
          <>
            <li>
              <NavLink
                className="h-[70px] px-4 rounded-md flex justify-center items-center "
                to={"/"}
                onClick={signOut}
              >
                Logout
              </NavLink>
            </li>
            <li>
              <NavLink
                className="h-[70px]  px-4 rounded-md flex justify-center items-center "
                to={"/user-profile"}
              >
                <img
                  src={state?.user?.userImg || authUser?.userImg}
                  alt=""
                  className="h-[50px] w-[50px] border rounded-full"
                />
              </NavLink>
            </li>
          </>
        ) : (
          <>
            {" "}
            <li className="">
              <NavLink
                className="py-2 px-4 rounded-md"
                to={"/login"}
                style={({ isActive }) => ({
                  backgroundColor: isActive && "#6300a3",
                  color: isActive && "white",
                })}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                className="py-2 px-4 rounded-md"
                to={"/register"}
                style={({ isActive }) => ({
                  backgroundColor: isActive && "#6300a3",
                  color: isActive && "white",
                })}
              >
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </section>
  );
};

export default Menu;
