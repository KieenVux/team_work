import { RouteObject } from "react-router-dom";
import { HomePage } from "../screens/homePage";
import { LoginPage } from "../screens/loginPage";
import { NotFoundPage } from "../screens/notFoundPage";
import { SignUpPage } from "../screens/signUpPage";
import { UpdatePage } from "../screens/updatePage";
import { UserPage } from "../screens/userPage";

export const route: RouteObject[] = [
    {
        path: "/",
        element: <HomePage />,
        children: [
        ]
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/signUp",
        element: <SignUpPage />,
    },
    {
        path: "/*",
        element: <NotFoundPage />
    },
    {
        path: "/user",
        element: <UserPage />,
    },
    {
        path: "/update",
        element: <UpdatePage />,
    }
]
