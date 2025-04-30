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
    ],
  },
]);

export default myRoutes;
