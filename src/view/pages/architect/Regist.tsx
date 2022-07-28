import { Path } from "@src/model/common/Path";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// styled
import { SDivider } from "@src/component/Sidebar/styles";
import { STab, STabs } from "@src/assets/style/view/view";
import { SRMBody, SRMCol, SRMContainer, SRMFooter, SRMImgPreview, SRMLeftSide, SRMRightSide, SRMTitle } from "@src/assets/style/regist&modify/regist&modfiy";
import { SHashTagBox, SHashTagContainer } from "@src/assets/style/contents/hashTag";
import { SInput_100p_30, SInput_100p_200, SInput_100_30, SInput_Hidden } from "@src/component/input/styled";
import { SBtn_100_30, SBtn_50_30 } from "@src/component/btn/styled";
import CTextArea from "@src/component/textArea/CTextArea";

function Regist() {
    const navigate = useNavigate();
    const fileBtn = useRef(null);
    const [tabNum, setTabNum] = useState<number>(0);

    return (
        <SRMContainer>
            <SRMBody>
                <SRMCol>
                    <SRMLeftSide>이름</SRMLeftSide>
                    <SRMRightSide>
                        <SInput_100p_30 />
                    </SRMRightSide>
                </SRMCol>
                <SRMCol>
                    <SRMLeftSide>회사명</SRMLeftSide>
                    <SRMRightSide>
                        <SInput_100p_30 />
                    </SRMRightSide>
                </SRMCol>
                <SRMCol>
                    <SRMLeftSide>대표사진</SRMLeftSide>
                    <SRMRightSide style={{ flexDirection: "column" }}>
                        <SInput_Hidden ref={fileBtn} type="file" />
                        <SBtn_100_30
                            onClick={() => {
                                console.log(fileBtn);
                                fileBtn?.current.click();
                            }}
                        >
                            파일찾기
                        </SBtn_100_30>
                        <SRMImgPreview>hahaha</SRMImgPreview>
                    </SRMRightSide>
                </SRMCol>
                <SRMCol>
                    <SRMLeftSide>회사주소</SRMLeftSide>
                    <SRMRightSide>
                        <SInput_100p_30 />
                    </SRMRightSide>
                </SRMCol>
                <SRMCol>
                    <SRMLeftSide>홈페이지</SRMLeftSide>
                    <SRMRightSide>
                        <SInput_100p_30 />
                    </SRMRightSide>
                </SRMCol>
                <SRMCol>
                    <SRMLeftSide>설명</SRMLeftSide>
                    <SRMRightSide>
                        <CTextArea width="100%" height="100%" minHeight="200px" resize="none" placeHolder="최대 2000자" />
                    </SRMRightSide>
                </SRMCol>
            </SRMBody>

            <SRMFooter>
                <SBtn_100_30>취소하기</SBtn_100_30>
                <SBtn_100_30>저장하기</SBtn_100_30>
            </SRMFooter>
        </SRMContainer>
    );
}

export default Regist;
