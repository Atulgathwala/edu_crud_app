import { createRoot } from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import myRoutes from "./routes/Routes";
import AuthContext from "./context/AuthContext";
import UserContext from "./context/UserContext";

createRoot(document.getElementById("root")).render(
  <AuthContext>
    <UserContext>
      <RouterProvider router={myRoutes}>
        <App />
      </RouterProvider>
    </UserContext>
  </AuthContext>
);
