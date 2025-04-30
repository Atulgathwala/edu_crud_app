import { createRoot } from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import myRoutes from "./routes/Routes";
import AuthContext from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <AuthContext>
    <RouterProvider router={myRoutes}>
      <App />
    </RouterProvider>
  </AuthContext>
);
