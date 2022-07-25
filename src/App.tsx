// @ts-nocheck
import React, { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Spinner from "./component/common/Spinner";

// Containers
const DefaultLayout = React.lazy(() => import("@src/view/layout/DefaultLayout"));

const App = () => {
    return (
        <HashRouter>
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route path="*" element={<DefaultLayout />}></Route>
                </Routes>
            </Suspense>
        </HashRouter>
    );
};

export default App;
