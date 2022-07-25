import React, { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Spinner from "./component/common/Spinner";

import DefaultLayout from "./view/layout/DefaultLayout";

const App = () => {
    return (
        <HashRouter>
            <Suspense fallback={<Spinner />}></Suspense>
            <Routes>
                <Route path="*" element={<DefaultLayout />}></Route>
            </Routes>
        </HashRouter>
    );
};

export default App;
