import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import CustomAxios from "@src/model/common/CustomAxios";
import Auth from "@src/model/common/Auth";
import { Config } from "@src/model/common/Config";

import Logo_Blue_L from "../../../assets/brands/Logo_Blue_L.svg";

const SloginContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

const SloginBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1180px;
    height: 100%;
`;

const SloginLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const SloginContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 400px;
`;

const SloginTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 35%;
    font-size: 32px;
`;

const SloginInputBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    width: 35%;
    height: 23%;
    margin-top: 14px;
`;

const SloginInputBox_box = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 32%;
`;

const SloginInputBox_box_title = styled.div`
    color: #b8b8c6;
    width: 33%;
`;

const SloginInputBox_box_input = styled.input`
    width: 100%;
    height: 100%;
    margin-left: 14px;
    border: 0.5px solid #b8b8c6;
    padding: 12px 10px;
`;

// const ScheckBox = styled.div`
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     width: 35%;
//     margin-top: 12px;
// `;

// const ScheckBox_inputBox = styled.input``;

// const ScheckBox_box = styled.div`
//     margin-left: 12px;
//     font-size: 12px;
// `;

const SloginBtn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    width: 98px;
    height: 48px;
    background: #000000;
    color: #ffffff;
    border-radius: 40px;
`;

const Login = () => {
    const navigate = useNavigate();

    const handleOnKeyPress = (e: any) => {
        if (e.key === "Enter") {
            loginHandler();
        }
    };

    const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
    const handleInputLoginValue = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginInfo({ ...loginInfo, [key]: e.target.value });
    };

    const loginHandler = async () => {
        if (loginInfo.email === "" || loginInfo.password === "") {
            return alert("이메일과 패스워드 모두 입력해주세요.");
        } else {
            const res = await CustomAxios.post(Config.admin.login, loginInfo);
            if (res.data.success) {
                sessionStorage.setItem("accessToken", res.data.data.accessToken);
                sessionStorage.setItem("checkSum", res.data.data.checkSum);
                navigate("/home");
            } else {
                return alert("로그인 계정이 없습니다.");
            }
        }
    };

    return (
        <SloginContainer>
            <SloginBox>
                <SloginLogo>
                    <img src={Logo_Blue_L} />
                </SloginLogo>
                <SloginContent>
                    <SloginTitle>
                        <div>로그인</div>
                    </SloginTitle>
                    <SloginInputBox>
                        <SloginInputBox_box>
                            <SloginInputBox_box_title>아이디</SloginInputBox_box_title>
                            <SloginInputBox_box_input type="email" placeholder="아이디를 입력해주세요" onChange={handleInputLoginValue("email")} onKeyPress={handleOnKeyPress} />
                        </SloginInputBox_box>
                        <SloginInputBox_box>
                            <SloginInputBox_box_title>비밀번호</SloginInputBox_box_title>
                            <SloginInputBox_box_input
                                type="password"
                                placeholder="비밀번호를 입력해주세요"
                                onChange={handleInputLoginValue("password")}
                                onKeyPress={handleOnKeyPress}
                            />
                        </SloginInputBox_box>
                    </SloginInputBox>
                    {/* <ScheckBox>
                        <ScheckBox_inputBox type="checkbox" id="individual" onClick={e => checkLogin(e)} />
                        <ScheckBox_box>로그인 유지</ScheckBox_box>
                    </ScheckBox> */}
                </SloginContent>
                <SloginBtn onClick={loginHandler}>로그인</SloginBtn>
            </SloginBox>
        </SloginContainer>
    );
};

export default Login;
