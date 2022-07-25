import React from "react";

import { Header, Nav, Footer } from "@src/component/index";
import Main from "@src/assets/imgs/main.jpg";

const DefaultLayout = () => {
    return (
        <body>
            <Header></Header>
            <Nav></Nav>
            <img src={Main} alt="" />
            <Footer></Footer>
        </body>
    );
};

export default DefaultLayout;
