import { Path } from "@src/model/common/Path";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// dummyData
import { label } from "./dumRegist";

// value
import { housePlanDashBoard, housePlan, interiorSource } from "@src/model/value/Contents";

// styled
import { SDivider } from "@src/component/Sidebar/styles";
import { STab, STabs } from "@src/assets/style/view/view";
import { SRMBody, SRMCol, SRMContainer, SRMFooter, SRMImgPreview, SRMLeftSide, SRMRightSide, SRMTitle } from "@src/assets/style/regist&modify/regist&modfiy";
import { SHashTagBox, SHashTagContainer } from "@src/assets/style/contents/hashTag";
import { SInput_100p_30, SInput_100_30, SInput_Hidden } from "@src/component/input/styled";
import { SBtn_100_30, SBtn_50_30 } from "@src/component/btn/styled";
import { AiOutlineFileImage, AiOutlineFileJpg } from "react-icons/ai";
import { checkFileType, FileListToArr } from "@src/utility/Files";
import { Config } from "@src/model/common/Config";

function Regist() {
    const navigate = useNavigate();
    const fileBtn = useRef(null);
    const [tabNum, setTabNum] = useState<number>(0);
    const [isHashTag, setIsHashTag] = useState<any>();
    const [isHashTagKey, setIsHashTagKey] = useState<any>();

    // JSON Data
    const [isTitle, setIsTitle] = useState({});
    const [isStyleHashTag, setIsStyleHashTag] = useState([]);
    const [isImg, setIsImg] = useState([]);
    const [isArchitect, setIsArchitect] = useState([]);
    const [isDashBoard, setIsDashBoard] = useState({});
    const [isHousePlan, setIsHousePlan] = useState({});
    const [isInterior, setIsInterior] = useState({});

    // HashTag Btn Color & setState & Delete setState
    const clickHashTagHandler = (hashTagKey: string, commonKey: string) => () => {
        const findHashTagToCommonKey = (hashTag: string) => {
            return hashTag === commonKey;
        };

        switch (hashTagKey) {
            case `${isHashTagKey[0]}`:
                if (isStyleHashTag.includes(commonKey as never)) {
                    const hashTagNum = isStyleHashTag.findIndex(findHashTagToCommonKey);

                    isStyleHashTag.splice(hashTagNum, 1);
                    console.log("삭제 : ", isStyleHashTag);
                    setIsStyleHashTag(isStyleHashTag);
                } else {
                    setIsStyleHashTag(prev => [...prev, commonKey as never]);
                }
                break;
        }
    };

    // InputTag setState
    const setContentsInputData =
        (obj: string, key = "") =>
        (e: React.FocusEvent<HTMLInputElement>) => {
            const value = e.target.value;
            switch (obj) {
                case "dashBoard":
                    return setIsDashBoard(prev => ({ ...prev, [key]: value }));
                case "housePaln":
                    return setIsHousePlan(prev => ({ ...prev, [key]: value }));
                case "interior":
                    return setIsInterior(prev => ({ ...prev, [key]: value }));
                case "title":
                    return setIsTitle(prev => ({ ...prev, [key]: value }));
                case "img":
                    return setImgHandler(e);
            }
        };

    const setImgHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        let files = e.target.files;
        if (files) files = checkFileType(files, Config.mimeType.contents);
        console.log(files);
    };

    // HashTag 초기 세팅
    useEffect(() => {
        const result = label.data;
        const key = Object.keys(result);

        setIsHashTag(result);
        setIsHashTagKey(key);
    }, []);

    return (
        <SRMContainer>
            <SRMBody>
                <SRMCol>
                    <SRMLeftSide>활성화 여부</SRMLeftSide>
                    <SRMRightSide>
                        <STabs>
                            <STab isAction={tabNum === 0} onClick={() => setTabNum(0)}>
                                활성화
                            </STab>
                            <STab isAction={tabNum === 1} onClick={() => setTabNum(1)}>
                                비활성화
                            </STab>
                        </STabs>
                    </SRMRightSide>
                </SRMCol>
                <SRMCol>
                    <SRMLeftSide>대제목</SRMLeftSide>
                    <SRMRightSide>
                        <SInput_100p_30 placeRow="right" placeholder="(최대 25자)" blurEnvent={setContentsInputData("mainTitle", "mainTitle")}></SInput_100p_30>
                    </SRMRightSide>
                </SRMCol>
                <SRMCol>
                    <SRMLeftSide>소제목</SRMLeftSide>
                    <SRMRightSide>
                        <SInput_100p_30 placeRow="right" placeholder="(최대 25자)" blurEnvent={setContentsInputData("subTitle", "subTitle")}></SInput_100p_30>
                    </SRMRightSide>
                </SRMCol>
                <SRMCol>
                    <SRMLeftSide>이미지</SRMLeftSide>
                    <SRMRightSide style={{ flexDirection: "column" }}>
                        <SInput_Hidden ref={fileBtn} type="file" multiple={true} onChange={setContentsInputData("img")} />
                        <SBtn_100_30
                            onClick={() => {
                                fileBtn?.current.click();
                            }}
                        >
                            파일찾기
                        </SBtn_100_30>
                        <SRMImgPreview>
                            <AiOutlineFileImage />
                        </SRMImgPreview>
                    </SRMRightSide>
                </SRMCol>
                <SRMCol>
                    <SRMLeftSide>건축가 정보</SRMLeftSide>
                    <SRMRightSide>
                        <SBtn_100_30>불러오기</SBtn_100_30>
                        <SInput_100_30 />
                        <SBtn_50_30>X</SBtn_50_30>
                    </SRMRightSide>
                </SRMCol>
                <SRMCol>
                    <SRMLeftSide>해시태그</SRMLeftSide>
                    <SRMRightSide>
                        <SHashTagContainer>
                            {isHashTag &&
                                isHashTag[isHashTagKey[0]]?.map((item: any, idx: number) => {
                                    const { commonKey, value } = item;
                                    return (
                                        <>
                                            <SHashTagBox key={idx}>
                                                <input type="checkbox" name="" id={commonKey} onClick={clickHashTagHandler(isHashTagKey[0], commonKey)} />
                                                <label htmlFor={commonKey}>{value}</label>
                                            </SHashTagBox>
                                        </>
                                    );
                                })}
                        </SHashTagContainer>
                    </SRMRightSide>
                </SRMCol>
                <SDivider />
                <SRMTitle>하우스플랜 (대시보드)</SRMTitle>
                {housePlanDashBoard.map((item: any, idx: number) => {
                    const { name, ElementTag, placeholder, placeRow } = item;
                    return (
                        <SRMCol key={idx}>
                            <SRMLeftSide>{name}</SRMLeftSide>
                            <SRMRightSide>
                                <ElementTag placeholder={placeholder} placeRow={placeRow} blurEnvent={setContentsInputData("dashBoard", name)} />
                            </SRMRightSide>
                        </SRMCol>
                    );
                })}
                <SDivider />
                <SRMTitle>하우스플랜</SRMTitle>
                {housePlan.map((item: any, idx: number) => {
                    const { name, ElementTag, placeholder, placeRow } = item;
                    return (
                        <SRMCol key={idx}>
                            <SRMLeftSide>{name}</SRMLeftSide>
                            <SRMRightSide>
                                <ElementTag placeholder={placeholder} placeRow={placeRow} blurEnvent={setContentsInputData("housePaln", name)} />
                            </SRMRightSide>
                        </SRMCol>
                    );
                })}
                <SDivider />
                <SRMTitle>인테리어 소스</SRMTitle>
                {interiorSource.map((item: any, idx: number) => {
                    const { name, ElementTag, placeholder, placeRow } = item;
                    return (
                        <SRMCol key={idx}>
                            <SRMLeftSide>{name}</SRMLeftSide>
                            <SRMRightSide>
                                <ElementTag placeholder={placeholder} placeRow={placeRow} blurEnvent={setContentsInputData("interior", name)} />
                            </SRMRightSide>
                        </SRMCol>
                    );
                })}
            </SRMBody>

            <SRMFooter>
                <SBtn_100_30>취소하기</SBtn_100_30>
                <SBtn_100_30>저장하기</SBtn_100_30>
            </SRMFooter>
        </SRMContainer>
    );
}

export default Regist;
