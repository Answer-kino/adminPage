import React, { Suspense } from "react";

// routing Config
import routes from "@src/route";
import { Spinner } from "@src/component/index";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { SDivider } from "./Sidebar/styles";
import { SMain } from "./layout/styles";
import styled from "styled-components";
import { v } from "@src/assets/style/variables";
const SPageLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const SHeader = styled.div`
    width: 100%;
    padding: calc(${v.xxlSpacing}) calc(${v.xxlSpacing}) 0 calc(${v.xxlSpacing} * 2);
    font-size: 32px;
    font-weight: 600;
`;
const AppContent = () => {
    return (
        <SPageLayout>
            <Suspense fallback={<Spinner />}>
                <Routes>
                    {routes.map((route: any, idx: any) => {
                        return (
                            route.element && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    element={
                                        <>
                                            <SHeader>{route.name}</SHeader>

                                            <SMain>
                                                <route.element />
                                            </SMain>
                                        </>
                                    }
                                />
                            )
                        );
                    })}
                    <Route path="/" element={<Navigate to="home" replace />} />
                </Routes>
            </Suspense>
        </SPageLayout>
    );
};

export default React.memo(AppContent);
