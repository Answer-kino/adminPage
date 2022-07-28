import React from "react";

const Home = React.lazy(() => import("@src/view/pages/home/Home"));
const ContentsViewPage = React.lazy(() => import("@src/view/pages/contents/View"));
const ArchitectViewPage = React.lazy(() => import("@src/view/pages/architect/View"));
const CustomerViewPage = React.lazy(() => import("@src/view/pages/customer/View"));

const routes = [
    { path: "/", exact: true, home: "Home" },
    { path: "/home", name: "대시보드", element: Home },
    { path: "/contents", name: "콘텐츠", element: ContentsViewPage },
    { path: "/contents/regist", name: "콘텐츠 추가", element: ContentsViewPage },
    { path: "/contents/modify", name: "콘텐츠 수정", element: ContentsViewPage },
    { path: "/architect", name: "건축가", element: ArchitectViewPage },
    { path: "/architect/regist", name: "건축가 추가", element: ArchitectViewPage },
    { path: "/architect/modify", name: "건축가 수정", element: ArchitectViewPage },
    { path: "/customer", name: "회원", element: CustomerViewPage }
];

export default routes;
