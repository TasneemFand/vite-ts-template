import { createBrowserRouter } from "react-router-dom";
import { UserLayout } from "@pages/user/layout";
import { UserPreference } from "@pages/user/page";
import { LandingPage } from "@pages/landingPage/page";
import { LandingLayout } from "@pages/landingPage/layout";

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
  {
    element: <LandingLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
]);
