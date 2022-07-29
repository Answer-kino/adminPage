import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { SDivider } from "@src/component/Sidebar/styles";
import { Main } from "@src/model/api/Main";
import { Path } from "@src/model/common/Path";
import { useNavigate } from "react-router-dom";

const ShomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`;

const ShomeContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: 3%;
`;

const ShomeContent_titleBox = styled.div`
    font-size: 24px;
    margin-bottom: 15px;
    cursor: pointer;
`;

const ShomeContent_contentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`;

const ShomeContent_contentBox_box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 28%;
    height: 32px;
`;

const Home = () => {
    const navigate = useNavigate();
    const [isTotal, setIsTotal] = useState<any>();

    const initDashBoard = async () => {
        const data = await Main.DashBoard();
        setIsTotal(data);
    };

    const linkHandler = (title: string) => () => {
        switch (title) {
            case "contents":
                navigate(Path.Contents("view"));
                break;
            case "architect":
                navigate(Path.Architect("view"));
                break;
            case "customer":
                navigate(Path.Cutomer("view"));
                break;
        }
    };

    useEffect(() => {
        initDashBoard();
    }, []);

    return (
        <ShomeContainer>
            <ShomeContent>
                <ShomeContent_titleBox onClick={linkHandler("contents")}>콘텐츠 관리</ShomeContent_titleBox>

                <ShomeContent_contentBox>
                    <ShomeContent_contentBox_box>
                        <div>금일 신규 콘텐츠</div>
                        <div>{isTotal?.buildingIdeaToDay} 건</div>
                    </ShomeContent_contentBox_box>
                    <ShomeContent_contentBox_box>
                        <div>총 콘텐츠 수</div>
                        <div>{isTotal?.buildingIdeaTotal} 건</div>
                    </ShomeContent_contentBox_box>
                </ShomeContent_contentBox>
            </ShomeContent>
            <SDivider />
            <ShomeContent>
                <ShomeContent_titleBox onClick={linkHandler("architect")}>건축가 관리</ShomeContent_titleBox>

                <ShomeContent_contentBox>
                    <ShomeContent_contentBox_box>
                        <div>금일 신규 건축가</div>
                        <div>{isTotal?.architectToDay} 건</div>
                    </ShomeContent_contentBox_box>
                    <ShomeContent_contentBox_box>
                        <div>총 건축가 수</div>
                        <div>{isTotal?.architectTotal} 건</div>
                    </ShomeContent_contentBox_box>
                </ShomeContent_contentBox>
            </ShomeContent>
            <SDivider />
            <ShomeContent>
                <ShomeContent_titleBox onClick={linkHandler("customer")}>회원 관리</ShomeContent_titleBox>
                <ShomeContent_contentBox>
                    <ShomeContent_contentBox_box>
                        <div>금일 신규 회원</div>
                        <div>{isTotal?.customerToDay} 건</div>
                    </ShomeContent_contentBox_box>
                    <ShomeContent_contentBox_box>
                        <div>총 회원 수</div>
                        <div>{isTotal?.customerTotal} 건</div>
                    </ShomeContent_contentBox_box>
                </ShomeContent_contentBox>
            </ShomeContent>
        </ShomeContainer>
    );
};

export default Home;
