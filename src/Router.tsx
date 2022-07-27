import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Spinner } from "./component/index";
import Layout from "./component/layout/Layout";
const Login = React.lazy(() => import("@src/view/pages/login/Login"));

const Router = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="*" element={<Layout />}></Route>
            </Routes>
        </Suspense>
    );
};

export default Router;
