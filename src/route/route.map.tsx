import { RouteObject } from "react-router-dom";
import AdminPage from "../screens/admin/admin-page";
import { HomePage } from "../screens/home-page";
import { LoginPage } from "../screens/login-page";
import { NotFoundPage } from "../screens/not-found-page";
import { SignUpPage } from "../screens/sign-up-page";
import { StaffPage } from "../screens/staff/staff-page";
import { UpdateProductsPage } from "../screens/staff/staff-update-page";
import { UserPage } from "../screens/user/user-page";
import { ProductPage } from "../screens/user/user-product-page";
import UploadProductsPage from "../screens/staff/staff-upload-products-page";

export const route: RouteObject[] = [
    {
        path: "/",
        element: <HomePage />,
        children: [
        ]
    },
    {
        path: "/admin",
        element: <AdminPage />,
    },
    {
        path: "/user",
        element: <UserPage />,
        children: [
            {
                index: true,
                element: <ProductPage />,
            },
        ]
    },
    {
        path: "/staff",
        element: <StaffPage />,
        children: [
            {
                path: "update-products",
                element: <UpdateProductsPage />,
            },
            {
                path: "upload-products",
                element: <UploadProductsPage />,
            },
        ]
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/sign-up",
        element: <SignUpPage />,
    },
    {
        path: "/*",
        element: <NotFoundPage />
    },
]
