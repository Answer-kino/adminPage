import React from "react";
import { AiOutlineAudit, AiOutlineDatabase, AiOutlineHome, AiOutlineLeft, AiOutlineLogout, AiOutlineSearch, AiOutlineSetting, AiOutlineTeam } from "react-icons/ai";

const linksArray = [
    {
        label: "홈",
        icon: <AiOutlineHome />,
        to: "/home",
        notification: 0
    },
    {
        label: "콘텐츠",
        icon: <AiOutlineDatabase />,
        to: "/contents",
        notification: 0
    },
    {
        label: "건축가",
        icon: <AiOutlineAudit />,
        to: "/architect",
        notification: 0
    },
    {
        label: "회원",
        icon: <AiOutlineTeam />,
        to: "/customer",
        notification: 0
    }
];
const secondaryLinksArray = [
    {
        label: "Settings",
        icon: <AiOutlineSetting />
    },
    {
        label: "Logout",
        icon: <AiOutlineLogout />
    }
];
export { linksArray, secondaryLinksArray };
