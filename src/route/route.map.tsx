import { RouteObject } from "react-router-dom";
import { Dynamic } from "../components/RouteDynamic";
//đặt tên sai nên qua đây đặt lại, rename bị 
import UserAction from "../pages/UserAction";
import Login from "../pages/Login";
import Home from "../pages/newHome";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";
import Users from "../pages/Users";

export const route: RouteObject[] = [
    {
        path: "/",
        element: <UserAction />
    },
    {
        path: "/userAction",
        element: <UserAction />,
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

export const route2: RouteObject[] = [
    
]