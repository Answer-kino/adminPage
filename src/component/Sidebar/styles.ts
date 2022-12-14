import styled from "styled-components";

import { btnReset, v } from "@src/assets/style/variables";
import { Link } from "react-router-dom";

export const SSidebar = styled.div`
    min-width: ${({ isOpen }: any) => (!isOpen ? "auto" : v.sidebarWidth)};
    width: ${({ isOpen }: any) => (!isOpen ? "auto" : v.sidebarWidth)};
    background: ${({ theme }) => theme.bg};
    min-height: 100vh;
    height: 100%;

    padding: ${v.lgSpacing};
    transition: all 0.4s ease;

    position: relative;
`;

export const SSidebarButton = styled.button`
    ${btnReset};
    position: absolute;
    top: ${v.xxlSpacing};
    right: ${({ isOpen }: any) => (isOpen ? "-16px" : "-40px")};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
    box-shadow: 0 0 4px ${({ theme }) => theme.bg3}, 0 0 7px ${({ theme }) => theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    transform: ${({ isOpen }) => (!isOpen ? "rotate(180deg)" : "initial")};
    transition: all 0.4s ease;
`;

export const SLogo = styled.div`
    width: 52px;
    display: flex;

    img {
        min-height: 100%;
        height: auto;
    }
    cursor: pointer;

    span {
        font-size: 28px;

        font-weight: 600;
        margin-left: 20px;
        display: ${({ isOpen }: any) => (!isOpen ? "none" : "block")};
    }

    margin-bottom: ${v.lgSpacing};
`;

export const SSearch = styled.div`
    background: ${({ theme }) => theme.bgAlpha};
    border: 1px solid ${({ theme }) => theme.bg3};
    border-radius: ${v.borderRadius};
    input {
        padding: 0 ${v.smSpacing};
        font-family: inherit;
        letter-spacing: inherit;
        font-size: 16px;
        width: 100%;
        outline: none;
        border: none;
        color: inherit;
        background: transparent;
    }
    display: flex;
`;

export const SSearchIcon = styled.button`
    ${btnReset}
    padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
    display: flex;
    cursor: pointer;

    svg {
        font-size: 20px;
    }
`;

export const SDivider = styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.bg3};
    margin: ${v.lgSpacing} 0;
`;

export const SLinkContainer = styled.div`
    background: ${({ theme, isActive }: any) => (!isActive ? "transparent" : theme.bg3)};
    border-radius: ${v.borderRadius};
    margin: 8px 0;

    :hover {
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
    }
    transition: all 0.3s ease;
`;

export const SLinkContainerScroll = styled.div`
    height: calc(100% - 50vh);
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const SLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: calc(${v.smSpacing} - 2px) 0;
`;

export const SLinkIcon = styled.div`
    padding: ${v.smSpacing} ${v.mdSpacing};
    display: flex;

    svg {
        font-size: 20px;
    }
`;

export const SLinkLabel = styled.span`
    display: block;
    flex: 1;
    max-lines: ${v.smSpacing};
`;

export const SLinkNotification = styled.div`
    font-size: 14px;
    padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
    border-radius: calc(${v.borderRadius} / 2);
    background: ${({ theme }) => theme.primary};
    color: white;

    margin-right: ${v.mdSpacing};
`;

export const STheme = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
`;

export const SthmeLabel = styled.span`
    display: block;
    flex: 1;
`;

export const SthemeToggler = styled.button`
    ${btnReset}
    margin: 0 auto;
    cursor: pointer;
    width: 36px;
    height: 20px;
    border-radius: 10px;
    background: ${({ theme, isActive }: any) => (!isActive ? theme.bg3 : theme.primary)};

    position: relative;
`;

export const SToggleThumb = styled.div`
    height: 18px;
    width: 18px;
    position: absolute;
    top: 1px;
    bottom: 1px;
    transition: 0.2s ease right;
    right: calc(100% - 18px - 1px);
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
`;
