// @ts-nocheck
import React from "react";

// Import Example

const Home = React.lazy(() => import("@src/view/pages/home/Home"));
// Login Page
const Login = React.lazy(() => import("@src/view/pages/login/Login"));

const routes = [
    { path: "/", exact: true, home: "Home" },
    { path: "/home", name: "Home", element: Home, exact: true },
    { path: "/login", name: "Login", element: Login, exact: true }
];

export default routes;
