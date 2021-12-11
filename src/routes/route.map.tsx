import { RouteObject } from "react-router-dom";
import { Account } from "../pages/account";
import { Accounts } from "../pages/accounts";
import { Login } from "../pages/login";
import { NotFound } from "../pages/not-found";
import { SignUp } from "../pages/signup";

export const routeObject: RouteObject[] = [
  {
    element: <Login />,
    path: "/login",
  },
  {
    element: <SignUp />,
    path: "/sign-up",
  },
  {
    element: <Account />,
    path: "/account",
  },
  {
    element: <Accounts />,
    path: "/",
  },
  {
    element: <NotFound />,
    path: "/*",
  },
];
