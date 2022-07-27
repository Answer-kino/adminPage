import React from "react";

import AppContents from "../AppContents";
import Sidebar from "../Sidebar/Sidebar";
import { SLayout } from "./styles";

const Layout = () => {
    return (
        <SLayout>
            <Sidebar />
            <AppContents />
        </SLayout>
    );
};

export default Layout;
