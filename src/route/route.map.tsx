import { RouteObject } from "react-router-dom";
import { Dynamic } from "../components/RouteDynamic";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";
import Users from "../pages/Users";

export const route: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
        children: [
            // {
            //     path: "/:id",
            //     element: <Dynamic />
            // }
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/*",
        element: <NotFound />
    },
    {
        path: "/user",
        element: <Users />,
    }
]
