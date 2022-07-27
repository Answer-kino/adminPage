import { btnReset, v } from "@src/assets/style/variables";
import { Pagination } from "@src/component/pagination/Pagination";
import { SDivider } from "@src/component/Sidebar/styles";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const STabs = styled.ul`
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: row;
`;
const STab = styled.li`
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

const STable = styled.table`
    width: 100%;
    min-width: 750px;
    margin: 0 auto;
    border-collapse: collapse;
    table-layout: fixed;
`;

const STableHead = styled.thead`
    background: ${({ theme }) => theme.bg3};
    border-top: 1px solid ${({ theme }) => theme.bg4};
    border-bottom: 1px solid ${({ theme }) => theme.bg4};

    th {
        border: 1px solid ${({ theme }) => theme.bg4};
    }
`;

const STableBody = styled.tbody``;

const STableRow = styled.tr`
    background: ${({ theme }) => theme.bg3};
    &:nth-child(odd) {
        background: ${({ theme }) => theme.bg2};
    }
`;

const STableData = styled.td`
    padding: 0 5px;
    /* border: 1px solid black; */
    text-align: center;
    &:nth-last-child(n + 1) {
        padding: 0;
    }
`;

const STableButton = styled.button`
    ${btnReset};
    width: 80px;
    height: 30px;
    margin: 10px;
    border: 1px solid black;
    border-radius: ${v.borderRadius};
    cursor: pointer;
    background: ${({ theme }) => theme.bg4};
`;

function View() {
    const [tabNum, setTabNum] = useState<number>(0);

    const [test, setTest] = useState([]);
    const [isLimit, setIsLimit] = useState(0);
    const [isOffset, setIsOffset] = useState(7);
    const [totalCount, setTotalCount] = useState(387);

    useEffect(() => {
        console.log(isLimit);
    }, [isLimit]);

    useEffect(() => {
        console.log("hi");
        setTest([]);
        for (let i = 0; i < 7; i++) {
            setTest(prev => [...prev, i]);
        }
    }, []);
    return (
        <section>
            <SDivider />
            <STabs>
                <STab isAction={tabNum === 0} onClick={() => setTabNum(0)}>
                    전체 목록(100)
                </STab>
                <STab isAction={tabNum === 1} onClick={() => setTabNum(1)}>
                    활성화(100)
                </STab>
                <STab isAction={tabNum === 2} onClick={() => setTabNum(2)}>
                    비활성화(100)
                </STab>
            </STabs>

            <STable>
                <STableHead>
                    <tr>
                        <th style={{ width: "50px" }}>No</th>
                        <th style={{ width: "120px" }}>ThumNail</th>
                        <th>Main Title</th>
                        <th>Sub Title</th>
                        <th>Related Content</th>
                        <th style={{ width: "100px" }}>Created Date</th>
                        <th style={{ width: "80px" }}>Active</th>
                        <th colSpan={2} style={{ width: "200px" }}></th>
                    </tr>
                </STableHead>
                <STableBody>
                    {test.map(i => {
                        return (
                            <STableRow key={i}>
                                <STableData style={{ whiteSpace: "pre-wrap" }}>{i}</STableData>
                                <STableData style={{ whiteSpace: "pre-wrap" }}>
                                    <img src="" alt="" style={{ margin: "10px", width: "100px", height: "60px" }} />
                                </STableData>
                                <STableData style={{ whiteSpace: "pre-wrap" }}>양평 힐링 집 </STableData>
                                <STableData style={{ whiteSpace: "pre-wrap" }}>신촌에서 힐링 너무 좋은 집</STableData>
                                <STableData style={{ whiteSpace: "pre-wrap" }}>신촌 협소주택 연희동 하우스</STableData>
                                <STableData style={{ whiteSpace: "pre-wrap" }}>
                                    <p>2021-05-05</p>
                                </STableData>
                                <STableData style={{ whiteSpace: "nowrap" }}>비활성화</STableData>
                                <STableData>
                                    <STableButton style={{ whiteSpace: "nowrap" }}>수정</STableButton>
                                </STableData>
                                <STableData>
                                    <STableButton style={{ whiteSpace: "nowrap" }}>삭제</STableButton>
                                </STableData>
                            </STableRow>
                        );
                    })}
                </STableBody>
            </STable>
            <SDivider />
            <Pagination isTotalCount={totalCount} setIsLimit={setIsLimit} />
        </section>
    );
}

export default View;
