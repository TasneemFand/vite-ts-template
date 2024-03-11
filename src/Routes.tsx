import { createBrowserRouter } from "react-router-dom";
import { UserLayout } from "@pages/user/layout";
import { UserPreference } from "@pages/user/page";

export const router = createBrowserRouter([
  {
    element: <UserLayout />,
    children: [
      {
        path: "userpreference",
        element: <UserPreference />,
      },
    ],
  },
]);
