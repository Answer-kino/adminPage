// @ts-nocheck
import React, { Suspense } from "react";

// routing Config
import routes from "@src/route";
import { Spinner } from "@src/component/index";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

const AppContent = () => {
    return (
        <div>
            <Suspense fallback={<Spinner />}>
                <Routes>
                    {routes.map((route, idx) => {
                        return route.element && <Route key={idx} path={route.path} exact={route.exact} name={route.name} element={<route.element />} />;
                    })}
                    <Route path="/" element={<Navigate to="home" replace />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default React.memo(AppContent);
