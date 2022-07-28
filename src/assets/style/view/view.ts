import styled from "styled-components";
import { btnReset, v } from "../variables";

export const SViewHeader = styled.header`
    display: flex;
`;

export const STabs = styled.ul`
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: row;

    button {
        justify-items: flex-end;
        justify-content: flex-end;
        align-items: flex-end;
        align-content: flex-end;
    }
`;
export const STab = styled.li`
    border-right: 1px solid ${({ theme }) => theme.bg3};
    border-top: 1px solid ${({ theme }) => theme.bg3};
    width: 160px;
    height: 40px;
    font-size: 18px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    background: ${({ theme, isAction }: any) => (!isAction ? theme.bg4 : theme.bg3)};
    &:first-child {
        border-left: 1px solid ${({ theme }) => theme.bg3};
    }
    :hover {
        background: ${({ theme }) => theme.bg3};
    }
    :active {
        background: ${({ theme }) => theme.bg4};
    }
`;

export const STabButton = styled.button`
    ${btnReset};
    width: 120px;
    height: 30px;
    margin: auto 10px;
    border: 1px solid black;
    border-radius: ${v.borderRadius};
    cursor: pointer;
    background: ${({ theme }) => theme.bg3};
    text-align: center;
`;

export const STableContainer = styled.div`
    /* width: 100%; */
    height: 600px;
    overflow-y: scroll;
    overflow-x: scroll;
`;

export const STable = styled.table`
    width: 100%;
    margin: 0 auto;
    border-collapse: collapse;
    table-layout: fixed;
`;

export const STableHead = styled.thead`
    background: ${({ theme }) => theme.bg3};
    border-top: 1px solid ${({ theme }) => theme.bg4};
    border-bottom: 1px solid ${({ theme }) => theme.bg4};

    th {
        border: 1px solid ${({ theme }) => theme.bg4};
    }
`;

export const STableHeader = styled.th``;

export const STableBody = styled.tbody``;

export const STableRow = styled.tr`
    background: ${({ theme }) => theme.bg3};
    &:nth-child(even) {
        background: ${({ theme }) => theme.bg2};
    }
`;

export const STableData = styled.td`
    padding: 0 5px;
    text-align: center;
    &:nth-last-child(n + 1) {
        padding: 0;
    }
`;

export const STableButton = styled.button`
    ${btnReset};
    width: 80px;
    height: 30px;
    margin: 10px;
    border: 1px solid black;
    border-radius: ${v.borderRadius};
    cursor: pointer;
    background: ${({ theme }) => theme.bg4};
    text-align: center;
`;
