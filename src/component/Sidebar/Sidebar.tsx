import React, { useContext, useEffect, useRef, useState } from "react";
import {
    SDivider,
    SLink,
    SLinkContainer,
    SLinkContainerScroll,
    SLinkIcon,
    SLinkLabel,
    SLinkNotification,
    SLogo,
    SSearch,
    SSearchIcon,
    SSidebar,
    SSidebarButton,
    STheme,
    SthemeToggler,
    SthmeLabel,
    SToggleThumb
} from "./styles";

import { linksArray, secondaryLinksArray } from "@src/nav";

import { Marker_S } from "@src/assets/brands/export";

import { AiOutlineAudit, AiOutlineDatabase, AiOutlineHome, AiOutlineLeft, AiOutlineLogout, AiOutlineSearch, AiOutlineSetting, AiOutlineTeam } from "react-icons/ai";

import { ThemeContext } from "@src/App";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Sidebar = ({ children }: any) => {
    const searchRef = useRef<any>();
    const { setTheme, theme } = useContext(ThemeContext);
    const [siderbarOpen, setSiderbarOpen] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const searchClickHandler = () => {
        if (!siderbarOpen) {
            setSiderbarOpen(true);
            searchRef.current.focus();
        } else {
            // search functionlity
            console.log("hi");
        }
    };

    useEffect(() => {
        console.log(pathname);
    }, [pathname]);

    return (
        <SSidebar isOpen={siderbarOpen}>
            <>
                <SSidebarButton
                    isOpen={siderbarOpen}
                    onClick={() => {
                        setSiderbarOpen(p => !p);
                    }}
                >
                    <AiOutlineLeft />
                </SSidebarButton>
            </>
            <SLogo
                isOpen={siderbarOpen}
                onClick={() => {
                    navigate("/");
                }}
            >
                <img src={Marker_S} alt="Marker_S" />
                <span>HomeFlix</span>
            </SLogo>
            {/* <SSearch onClick={searchClickHandler} style={!siderbarOpen ? { width: "fit-content" } : {}}>
                <SSearchIcon>
                    <AiOutlineSearch />
                </SSearchIcon>
                <input ref={searchRef} placeholder="Search" style={!siderbarOpen ? { width: 0, padding: 0 } : {}} />
            </SSearch> */}
            <SDivider />
            <SLinkContainerScroll>
                {linksArray.map(({ label, icon, to, notification }) => {
                    return (
                        <SLinkContainer key={label} isActive={pathname === to}>
                            <SLink to={to} style={!siderbarOpen ? { width: "fit-content" } : {}}>
                                <SLinkIcon>{icon}</SLinkIcon>
                                {siderbarOpen && (
                                    <>
                                        <SLinkLabel>{label}</SLinkLabel>
                                        {/* if notification are at 0 or null, do not display */}
                                        {!!notification && <SLinkNotification>{notification}</SLinkNotification>}
                                    </>
                                )}
                            </SLink>
                        </SLinkContainer>
                    );
                })}
            </SLinkContainerScroll>
            <SDivider />
            <STheme>
                {siderbarOpen && <SthmeLabel>Dark Mode</SthmeLabel>}
                <SthemeToggler isActive={theme === "dark"} onClick={() => setTheme((p: string) => (p === "light" ? "dark" : "light"))}>
                    <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
                </SthemeToggler>
            </STheme>
            <SDivider />
            {secondaryLinksArray.map(({ icon, label }) => {
                return (
                    <SLinkContainer key={label}>
                        <SLink to="" style={!siderbarOpen ? { width: "fit-content" } : {}}>
                            <SLinkIcon>{icon}</SLinkIcon>
                            {siderbarOpen && <SLinkLabel>{label}</SLinkLabel>}
                        </SLink>
                    </SLinkContainer>
                );
            })}
        </SSidebar>
    );
};

export default Sidebar;
