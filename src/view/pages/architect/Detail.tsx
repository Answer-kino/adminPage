import React, { useEffect, useState } from "react";
import { SDivider } from "@src/component/Sidebar/styles";
import { STableContainer, STable, STableHead, STableHeader, STableBody, STableRow, STableData, STableButton } from "@src/assets/style/view/view";

function Detail() {
    return (
        <>
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
                        <STableRow key={1}>
                            <STableData style={{ width: "50px", whiteSpace: "pre-wrap" }}>{1}</STableData>
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
                    </STableBody>
                </STable>
            </STableContainer>
            <SDivider />
        </>
    );
}

export default Detail;
