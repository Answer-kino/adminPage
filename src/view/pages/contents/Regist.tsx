import React, { useEffect, useInsertionEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// Component
const ArchitectModal = React.lazy(() => import("@src/component/modal/ModalComponent"));

// dummyData
import { label } from "./dumRegist";

// value
import { housePlanDashBoard, housePlan, interiorSource } from "@src/model/value/Contents";

// styled
import { SDivider } from "@src/component/Sidebar/styles";
import { STab, STabs } from "@src/assets/style/view/view";
import { SRMBody, SRMCol, SRMContainer, SRMFooter, SRMImgPreview, SRMLeftSide, SRMRightSide, SRMTitle } from "@src/assets/style/regist&modify/regist&modfiy";
import { SHashTagBox, SHashTagContainer, SHashTagTitle } from "@src/assets/style/contents/hashTag";
import { SInput_100p_30, SInput_100_30, SInput_Hidden } from "@src/component/input/styled";
import { SBtn_100_30, SBtn_50_30 } from "@src/component/btn/styled";
import { AiOutlineFileImage } from "react-icons/ai";
import { checkFilesHandler, FileListToArr } from "@src/utility/Files";
import { Contents } from "@src/model/api/Contents";

function Regist() {
    const navigate = useNavigate();
    const fileBtn = useRef() as React.MutableRefObject<HTMLInputElement>;
    const architectBtn = useRef() as React.MutableRefObject<HTMLInputElement>;
    const [tabNum, setTabNum] = useState<number>(0);
    const [isHashTag, setIsHashTag] = useState<any>();
    const [isHashTagKey, setIsHashTagKey] = useState<any>();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    // JSON Data
    const [isTitle, setIsTitle] = useState({});
    const [isStyleHashTag, setIsStyleHashTag] = useState<Array<string>>([]);
    const [isFamilyHashTag, setIsFamilyHashTag] = useState<Array<string>>([]);
    const [isTotallandHashTag, setIsTotallandHashTag] = useState<Array<string>>([]);
    const [isImg, setIsImg] = useState<Array<File>>([]);
    const [isArchitect, setIsArchitect] = useState([]);
    const [isDashBoard, setIsDashBoard] = useState({});
    const [isHousePlan, setIsHousePlan] = useState({});
    const [isInterior, setIsInterior] = useState({});

    // InputTag<Text> setState
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

    // InputTag<File> setState
    const setImgHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        let files = e.target.files;

        if (files) {
            let fileArr: Array<File> = [];
            files = checkFilesHandler(files);
            fileArr = FileListToArr(files);
            setIsImg((prev: Array<File>) => [...prev, ...fileArr]);
        }
    };

    // init HashTag Data
    const getHashTag = async () => {
        const result = await Contents.HashTag();
        const key = Object.keys(result);

        setIsHashTag(result);
        setIsHashTagKey(key);
    };
    useEffect(() => {
        getHashTag();
    }, []);

    // HashTag Btn Color & setState & Delete setState
    const clickHashTagHandler = (hashTagKey: string, commonKey: string) => () => {
        switch (hashTagKey) {
            case `${isHashTagKey[0]}`:
                checkHashTagHandler(isStyleHashTag, setIsStyleHashTag, commonKey);
                break;
            case `${isHashTagKey[1]}`:
                checkHashTagHandler(isFamilyHashTag, setIsFamilyHashTag, commonKey);
                break;
            case `${isHashTagKey[2]}`:
                checkHashTagHandler(isTotallandHashTag, setIsTotallandHashTag, commonKey);
                break;
        }
    };

    const checkHashTagHandler = (state: string[], setState: React.Dispatch<React.SetStateAction<string[]>>, commonKey: string) => {
        const findHashTagToCommonKey = (hashTag: string) => {
            return hashTag === commonKey;
        };
        if (state.includes(commonKey as never)) {
            const hashTagNum = state.findIndex(findHashTagToCommonKey);
            state.splice(hashTagNum, 1);
            setState(state);
        } else {
            setState((prev: Array<string>) => [...prev, commonKey]);
        }
    };

    const registContentsHandler = () => () => {
        console.log("isTitle : ", isTitle);
        console.log("isStyleHashTag : ", isStyleHashTag);
        console.log("isFamilyHashTag : ", isFamilyHashTag);
        console.log("isTotallandHashTag : ", isTotallandHashTag);
        console.log("isImg : ", isImg);
        console.log("isArchitect : ", isArchitect);
        console.log("isDashBoard : ", isDashBoard);
        console.log("isHousePlan : ", isHousePlan);
        console.log("isInterior : ", isInterior);
    };

    return (
        <>
            <ArchitectModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
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
                            <SInput_100p_30 placeRow="right" placeholder="(최대 25자)" blurEnvent={setContentsInputData("mainTitle")}></SInput_100p_30>
                        </SRMRightSide>
                    </SRMCol>
                    <SRMCol>
                        <SRMLeftSide>소제목</SRMLeftSide>
                        <SRMRightSide>
                            <SInput_100p_30 placeRow="right" placeholder="(최대 25자)" blurEnvent={setContentsInputData("subTitle")}></SInput_100p_30>
                        </SRMRightSide>
                    </SRMCol>
                    <SRMCol>
                        <SRMLeftSide>이미지</SRMLeftSide>
                        <SRMRightSide style={{ flexDirection: "column" }}>
                            <SInput_Hidden ref={fileBtn} type="file" multiple={true} onChange={setContentsInputData("img")} />
                            <SBtn_100_30
                                onClick={() => {
                                    fileBtn?.current?.click();
                                }}
                            >
                                파일찾기
                            </SBtn_100_30>
                            <SRMImgPreview>
                                {isImg.map((item: File, idx: number) => {
                                    return (
                                        <div key={idx} style={{ display: "flex", flexDirection: "column" }}>
                                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                                                    <AiOutlineFileImage />
                                                    <p>{item.name}</p>
                                                </div>
                                                {/* <div>X</div> */}
                                            </div>
                                        </div>
                                    );
                                })}
                            </SRMImgPreview>
                        </SRMRightSide>
                    </SRMCol>
                    <SRMCol>
                        <SRMLeftSide>건축가 정보</SRMLeftSide>
                        <SRMRightSide>
                            <SBtn_100_30>불러오기</SBtn_100_30>
                            <SInput_100_30 value={isArchitect[0]} />
                            <SBtn_50_30>X</SBtn_50_30>
                        </SRMRightSide>
                    </SRMCol>
                    <SRMCol>
                        <SRMLeftSide>해시태그</SRMLeftSide>
                        <SRMRightSide style={{ display: "flex", flexDirection: "column" }}>
                            {isHashTagKey &&
                                isHashTagKey.map((key: string, idx: number) => {
                                    const isHashTagKeyLen = isHashTagKey.length - 1;
                                    return (
                                        <>
                                            <SHashTagTitle>{key}</SHashTagTitle>
                                            <SHashTagContainer>
                                                {isHashTag[key].map((item: any, idx: number) => {
                                                    const { commonKey, value } = item;

                                                    return (
                                                        <>
                                                            <SHashTagBox key={idx}>
                                                                <input type="checkbox" name="" id={commonKey} onClick={clickHashTagHandler(key, commonKey)} />
                                                                <label htmlFor={commonKey}>{value}</label>
                                                            </SHashTagBox>
                                                        </>
                                                    );
                                                })}
                                            </SHashTagContainer>
                                            {isHashTagKeyLen !== idx ? <SDivider /> : <></>}
                                        </>
                                    );
                                })}
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
                    <SBtn_100_30
                        onClick={() => {
                            navigate("/contents");
                        }}
                    >
                        취소하기
                    </SBtn_100_30>
                    <SBtn_100_30 onClick={registContentsHandler()}>저장하기</SBtn_100_30>
                </SRMFooter>
            </SRMContainer>
        </>
    );
}

export default Regist;
