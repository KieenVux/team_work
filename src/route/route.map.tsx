import { RouteObject } from "react-router-dom";
import { Dynamic } from "../components/RouteDynamic";

// import UserAction from "../pages/UserAction";
import UserActions from "../pages/userActions";


// import Home from "../pages/newHome";
import NewHome from "../pages/newHome";

//
import NotFound from "../pages/NotFound";

// import SignUp from "../pages/SignUp";
import NewSignUp from "../components/newSignUp";

// import Users from "../pages/Users";


// import Login from "../pages/Login";
import NewLoginForm from '../components/newLogin';


export const route: RouteObject[] = [
    {
        path: "/",
        element: <NewHome />
        // element: <UserAction />
    },
    {
        path: "/userAction",
        element: <UserActions />,
        // children: [
        //     {
        //         path: "/userAction/login",
        //         element: <NewLoginForm />
        //     },
        //     {
        //         path: "/userAction/signup",
        //         element: <NewSignUp />
        //     },
        // ]
    },
    // {
    //     path: "/login",
    //     element: <NewLoginForm />
    //     // element: <Login />,
    // },
    // {
    //     path: "/signup",
    //     element: <NewSignUp />,
    // },
    {
        path: "/*",
        element: <NotFound />
    },
    {
        path: "/user",
        // element: <NewLoginForm />,
    }
]

export const route2: RouteObject[] = [
    
]