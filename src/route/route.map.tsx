import { RouteObject } from "react-router-dom";

import UserActions from "../pages/userActions";

import NewHome from "../pages/newHome";

import NotFound from "../pages/NotFound";

import AdminActions from "../components/adminActions";


export const route: RouteObject[] = [
    {
        path: "/",
        element: <NewHome />,
        children: [
            {
                path: "/adminAction",
                element: <AdminActions />,
            },
            {
                path: "/",
                element: <div>
                    <h1>HOME</h1>
                    <span>Content:</span>
                </div>,
            },
        ]
    },
    {
        path: "/userAction",
        element: <UserActions />
    },
    {
        path: "/*",
        element: <NotFound />
    }
]

export const route2: RouteObject[] = [

]