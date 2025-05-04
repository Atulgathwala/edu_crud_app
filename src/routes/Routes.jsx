import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import UserMainContainer from "../components/UserComponents/UserMainContainer";
import MyAccount from "../components/UserComponents/MyAccount";
import UpdateProfilePicture from "../components/UserComponents/UpdateProfilePicture";
import AddProfile from "../components/UserComponents/AddProfile";
import ChangePassword from "../components/UserComponents/ChangePassword";
import DeleteAccount from "../components/UserComponents/DeleteAccount";
import AdminMainContainer from "../components/AdminComponents.jsx/AdminMainContainer";
import AdminDashboard from "../components/AdminComponents.jsx/AdminDashboard";
import CreateCourses from "../components/AdminComponents.jsx/CreateCourses";
import AllUsers from "../components/AdminComponents.jsx/AllUsers";
import AllCourses from "../components/AdminComponents.jsx/AllCourses";

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "user-profile",
    element: <UserMainContainer />,
    children: [
      {
        index: true,
        element: <MyAccount />,
      },
      {
        path: "update-profile-picture",
        element: <UpdateProfilePicture />,
      },
      {
        path: "add-profile",
        element: <AddProfile />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
      {
        path: "delete-account",
        element: <DeleteAccount />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminMainContainer />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "create-course",
        element: <CreateCourses />,
      },
      {
        path: "all-users",
        element: <AllUsers />,
      },
      {
        path: "all-courses",
        element: <AllCourses />,
      },
    ],
  },
]);

export default myRoutes;
