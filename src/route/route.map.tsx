import { RouteObject } from "react-router-dom";
import { Dynamic } from "../components/RouteDynamic";
//đặt tên sai nên qua đây đặt lại, rename bị 
import UserAction from "../pages/UserAction";


// import Home from "../pages/newHome";
import NewHome from "../pages/newHome";

import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";

// import Users from "../pages/Users";

// import Login from "../pages/Login";
import NewLoginForm from '../pages/newLogin';


export const route: RouteObject[] = [
    {
        path: "/",
        element: <NewHome />
        // element: <UserAction />
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
        element: <NewLoginForm />
        // element: <Login />,
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
        element: <NewLoginForm />,
    }
]

export const route2: RouteObject[] = [
    
]