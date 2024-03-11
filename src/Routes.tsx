import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <></>,
    children: [
      {
        path: "login",
        element: <div>login</div>,
      },
    ],
  },
]);
