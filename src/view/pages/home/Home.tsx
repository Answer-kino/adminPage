import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { SDivider } from "@src/component/Sidebar/styles";

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
    return (
        <ShomeContainer>
            <ShomeContent>
                <ShomeContent_titleBox>콘텐츠 관리</ShomeContent_titleBox>
                <SDivider />
                <ShomeContent_contentBox>
                    <ShomeContent_contentBox_box>
                        <div>금일 신규 콘텐츠</div>
                        <div>2,991 건</div>
                    </ShomeContent_contentBox_box>
                    <ShomeContent_contentBox_box>
                        <div>총 콘텐츠 수</div>
                        <div>16,492 건</div>
                    </ShomeContent_contentBox_box>
                </ShomeContent_contentBox>
            </ShomeContent>
            <ShomeContent>
                <ShomeContent_titleBox>건축가 관리</ShomeContent_titleBox>
                <SDivider />
                <ShomeContent_contentBox>
                    <ShomeContent_contentBox_box>
                        <div>금일 신규 건축가</div>
                        <div>2,991 명</div>
                    </ShomeContent_contentBox_box>
                    <ShomeContent_contentBox_box>
                        <div>총 건축가 수</div>
                        <div>16,492 명</div>
                    </ShomeContent_contentBox_box>
                </ShomeContent_contentBox>
            </ShomeContent>
            <ShomeContent>
                <ShomeContent_titleBox>회원 관리</ShomeContent_titleBox>
                <SDivider />
                <ShomeContent_contentBox>
                    <ShomeContent_contentBox_box>
                        <div>금일 신규 회원</div>
                        <div>2,991 명</div>
                    </ShomeContent_contentBox_box>
                    <ShomeContent_contentBox_box>
                        <div>총 회원 수</div>
                        <div>16,492 명</div>
                    </ShomeContent_contentBox_box>
                </ShomeContent_contentBox>
            </ShomeContent>
        </ShomeContainer>
    );
};

export default Home;
