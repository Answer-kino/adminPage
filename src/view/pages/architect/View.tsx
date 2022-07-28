import React, { useEffect, useState } from "react";
import { SDivider } from "@src/component/Sidebar/styles";
import {
    SViewHeader,
    STabs,
    STab,
    STabButton,
    STableContainer,
    STable,
    STableHead,
    STableHeader,
    STableBody,
    STableRow,
    STableData,
    STableButton
} from "@src/assets/style/view/view";

import { Pagination } from "@src/component/pagination/Pagination";
import { Path } from "@src/model/common/Path";
import { useNavigate } from "react-router-dom";

function View() {
    const navigate = useNavigate();
    const [tabNum, setTabNum] = useState<number>(0);

    const [test, setTest] = useState([]);
    const [isViewCount, setIsViewCount] = useState<number>(10);
    const [isLimit, setIsLimit] = useState<number>(isViewCount);
    const [isOffset, setIsOffset] = useState<number>(1);
    const [totalCount, setTotalCount] = useState(387);

    useEffect(() => {
        setTest([]);
        for (let i = isOffset; i <= isLimit; i++) {
            setTest(prev => [...prev, i]);
        }
    }, [isLimit]);
    return (
        <>
            <SViewHeader>
                <STabs>
                    <STab isAction={tabNum === 0} onClick={() => setTabNum(0)}>
                        전체 목록(100)
                    </STab>
                </STabs>
                <STabButton
                    onClick={() => {
                        navigate(Path.Architect("regist"));
                    }}
                >
                    추가하기
                </STabButton>
            </SViewHeader>

            <STableContainer>
                <STable>
                    <STableHead>
                        <STableRow>
                            <STableHeader style={{ width: "50px" }}>No</STableHeader>
                            <STableHeader style={{ width: "120px" }}>ThumNail</STableHeader>
                            <STableHeader style={{ width: "200px" }}>이름</STableHeader>
                            <STableHeader style={{ width: "100px" }}>회사</STableHeader>
                            <STableHeader style={{ width: "100px" }}>Created Date</STableHeader>
                            <STableHeader colSpan={2} style={{ width: "200px" }}></STableHeader>
                        </STableRow>
                    </STableHead>
                    <STableBody>
                        {test.map(i => {
                            return (
                                <STableRow key={i}>
                                    <STableData style={{ width: "50px", whiteSpace: "pre-wrap" }}>{i}</STableData>
                                    <STableData style={{ width: "120px", whiteSpace: "pre-wrap" }}>
                                        <img src="" alt="" style={{ margin: "10px", width: "100px", height: "60px" }} />
                                    </STableData>
                                    <STableData style={{ width: "200px", whiteSpace: "pre-wrap" }}>양평 힐링 집 </STableData>
                                    <STableData style={{ width: "100px", whiteSpace: "pre-wrap" }}>신촌에서 힐링 너무 좋은 집</STableData>
                                    <STableData style={{ width: "100px", whiteSpace: "pre-wrap" }}>
                                        <p>2021-05-05</p>
                                    </STableData>
                                    <STableData>
                                        <STableButton>수정</STableButton>
                                    </STableData>
                                    <STableData>
                                        <STableButton>삭제</STableButton>
                                    </STableData>
                                </STableRow>
                            );
                        })}
                    </STableBody>
                </STable>
            </STableContainer>
            <SDivider />
            <Pagination isTotalCount={totalCount} isViewCount={isViewCount} setIsLimit={setIsLimit} setIsOffset={setIsOffset} />
        </>
    );
}

export default View;
