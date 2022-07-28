import React from "react";

const Home = React.lazy(() => import("@src/view/pages/home/Home"));
const ContentsViewPage = React.lazy(() => import("@src/view/pages/contents/View"));
const ContentsRegistPage = React.lazy(() => import("@src/view/pages/contents/Regist"));
const ContentsDetailPage = React.lazy(() => import("@src/view/pages/contents/Detail"));
const ArchitectViewPage = React.lazy(() => import("@src/view/pages/architect/View"));
const ArchitectRegistPage = React.lazy(() => import("@src/view/pages/architect/Regist"));
const ArchitectDetailPage = React.lazy(() => import("@src/view/pages/architect/Detail"));
const CustomerViewPage = React.lazy(() => import("@src/view/pages/customer/View"));

const routes = [
    { path: "/", exact: true, home: "Home" },
    { path: "/home", name: "대시보드", element: Home },
    { path: "/contents", name: "콘텐츠", element: ContentsViewPage },
    { path: "/contents/regist", name: "콘텐츠 추가", element: ContentsRegistPage },
    { path: "/contents/modify", name: "콘텐츠 수정", element: ContentsViewPage },
    { path: "/contents/detail/*", name: "콘텐츠 정보", element: ContentsDetailPage },
    { path: "/architect", name: "건축가", element: ArchitectViewPage },
    { path: "/architect/regist", name: "건축가 추가", element: ArchitectRegistPage },
    { path: "/architect/modify", name: "건축가 수정", element: ArchitectDetailPage },
    { path: "/customer", name: "회원", element: CustomerViewPage }
];

export default routes;
