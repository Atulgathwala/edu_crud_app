import { createRoot } from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import myRoutes from "./routes/Routes";
import AuthContext from "./context/AuthContext";
import UserContext from "./context/UserContext";
import CourseContext from "./context/CourseContext";

createRoot(document.getElementById("root")).render(
  <AuthContext>
    <UserContext>
      <CourseContext>
        <RouterProvider router={myRoutes}>
          <App />
        </RouterProvider>
      </CourseContext>
    </UserContext>
  </AuthContext>
);
