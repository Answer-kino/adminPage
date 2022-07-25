import React from "react";

import { Header, Nav, Footer } from "@src/component/index";
import AppContents from "@src/component/AppContents";

const DefaultLayout = () => {
    return (
        <body>
            <Header />
            <Nav />
            <AppContents />
            <Footer />
        </body>
    );
};

export default DefaultLayout;
