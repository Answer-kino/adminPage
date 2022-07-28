import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Modal from "react-modal";

import { SDivider } from "@src/component/Sidebar/styles";
import "./ModalComponent.css";

const modalCustomStyles = {
    overlay: {
        backgroundColor: "rgba(229, 229, 229, 0.7)"
    },
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        width: "621px",
        height: "85%",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
    }
};

function ModalComponent({ isModalOpen, setIsModalOpen }: any) {
    const location = useLocation();
    const pathName = location.pathname;

    return (
        <>
            {pathName === "/" ? (
                <Modal isOpen={isModalOpen} style={modalCustomStyles} contentLabel="ModalComponent">
                    <div className="contentsModalBox">
                        <div className="contentsModalBox_title">
                            <div>콘텐츠 조회</div>
                            <div
                                onClick={() => {
                                    setIsModalOpen(false);
                                }}
                            >
                                X
                            </div>
                        </div>
                        <SDivider />
                        <table>
                            <thead>
                                <tr>
                                    <th>대제목</th>
                                    <th>전원이 있는 집</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>소제목</td>
                                    <td>우리집 소소한 행복</td>
                                </tr>
                                <tr>
                                    <td>활성화여부</td>
                                    <td>활성화</td>
                                </tr>
                                <tr>
                                    <td>이미지</td>
                                    <td>
                                        <div className="table_imgBox">
                                            <div className="table_img"></div>
                                            <div className="table_img"></div>
                                            <div className="table_img"></div>
                                            <div className="table_img"></div>
                                            <div className="table_img"></div>
                                            <div className="table_img"></div>
                                            <div className="table_img"></div>
                                            <div className="table_img"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>해시태그</td>
                                    <td>#신축 #럭셔리 #클래식 #신축 #럭셔리 #클래식 #신축 #럭셔리</td>
                                </tr>
                                <tr>
                                    <td>건축가</td>
                                    <td>CCD 건축사무소</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="table_title">하우스플랜 (대시보드)</div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>출처</td>
                                    <td>CCD 건축사무소</td>
                                </tr>
                                <tr>
                                    <td>가격</td>
                                    <td>4억원대</td>
                                </tr>
                                <tr>
                                    <td>위치</td>
                                    <td>경기도 양평군</td>
                                </tr>
                                <tr>
                                    <td>가족구성원</td>
                                    <td>다섯 가족</td>
                                </tr>
                                <tr>
                                    <td>스타일</td>
                                    <td>모던, 럭셔리</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="table_title">하우스플랜</div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>대지위치</td>
                                    <td>경기도 양평군 강상면 교평리 38-41</td>
                                </tr>
                                <tr>
                                    <td>대지규모</td>
                                    <td>310m2(93.77평)</td>
                                </tr>
                                <tr>
                                    <td>건물규모</td>
                                    <td>지상 2층 + 옥상</td>
                                </tr>
                                <tr>
                                    <td>연면적</td>
                                    <td>181.86m2(37.16평)</td>
                                </tr>
                                <tr>
                                    <td>건폐율</td>
                                    <td>39.63%</td>
                                </tr>
                                <tr>
                                    <td>주차대수</td>
                                    <td>각 2대</td>
                                </tr>
                                <tr>
                                    <td>최고높이</td>
                                    <th>8.2m</th>
                                </tr>
                                <tr>
                                    <td>구조</td>
                                    <td>기초-철근콘크리트 매트기초</td>
                                </tr>
                                <tr>
                                    <td>단열재</td>
                                    <td>비드법보온판 2종1호</td>
                                </tr>
                                <tr>
                                    <td>담장재</td>
                                    <td>두라스택큐블록 Q3</td>
                                </tr>
                                <tr>
                                    <td>창호재</td>
                                    <td>독일 알루플라스트 시스템창호 39T</td>
                                </tr>
                                <tr>
                                    <td>열회수환기장치</td>
                                    <td>벽부형 열회수환기장치 아인스 에어탱크 1</td>
                                </tr>
                                <tr>
                                    <td>에너지원</td>
                                    <td>휘발유</td>
                                </tr>
                                <tr>
                                    <td>구조설계</td>
                                    <th>디자인하우스</th>
                                </tr>
                                <tr>
                                    <td>디자인</td>
                                    <td>곽데오도르, 윤현정</td>
                                </tr>
                                <tr>
                                    <td>설계</td>
                                    <td>호재건축사무소</td>
                                </tr>
                                <tr>
                                    <td>감리</td>
                                    <td>존, 키노</td>
                                </tr>
                                <tr>
                                    <td>시공</td>
                                    <td>홈플릭스</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="table_title">인테리어소스</div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>내부마감재</td>
                                    <td>벽-친환경 도장 / 바닥-석재타일</td>
                                </tr>
                                <tr>
                                    <td>욕실 및 주방타일</td>
                                    <td>수입타일</td>
                                </tr>
                                <tr>
                                    <td>수전 등 욕실기기</td>
                                    <td>아메리칸스탠다드</td>
                                </tr>
                                <tr>
                                    <td>주방가구, 붙박이장</td>
                                    <td>짜임시스</td>
                                </tr>
                                <tr>
                                    <td>계단재, 난간</td>
                                    <td>느룹나무 교재 + 계단판_평칠환봉</td>
                                </tr>
                                <tr>
                                    <td>현관문</td>
                                    <td>조은현관문</td>
                                </tr>
                                <tr>
                                    <td>종로 및 방문</td>
                                    <td>나무대장간</td>
                                </tr>
                                <tr>
                                    <td>데크재</td>
                                    <td>방무목 19mm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Modal>
            ) : (
                ""
            )}
            {pathName === "/" ? (
                <Modal isOpen={isModalOpen} style={modalCustomStyles} contentLabel="ModalComponent">
                    <div className="contentsModalBox">
                        <div className="contentsModalBox_title">
                            <div>건축가 조회</div>
                            <div
                                onClick={() => {
                                    setIsModalOpen(false);
                                }}
                            >
                                X
                            </div>
                        </div>
                        <SDivider />
                        <table>
                            <thead>
                                <tr>
                                    <td>이름</td>
                                    <td>김박사</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>회사명</td>
                                    <td>건축박사사무소</td>
                                </tr>
                                <tr>
                                    <td>대표사진</td>
                                    <td>
                                        <div className="table_imgBox">
                                            <div className="table_img"></div>
                                            <div className="table_img"></div>
                                            <div className="table_img"></div>
                                            <div className="table_img"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>전화번호</td>
                                    <td>02-123-4567</td>
                                </tr>
                                <tr>
                                    <td>메일 or 주소</td>
                                    <td>강원도 강릉시</td>
                                </tr>
                                <tr>
                                    <td>설명</td>
                                    <td>김박사의 건축가 사무소 입니다.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Modal>
            ) : (
                ""
            )}
            {pathName === "/" ? (
                <Modal isOpen={isModalOpen} style={modalCustomStyles} contentLabel="ModalComponent">
                    <div className="contentsModalBox">
                        <div className="contentsModalBox_title">
                            <div>회원 조회</div>
                            <div
                                onClick={() => {
                                    setIsModalOpen(false);
                                }}
                            >
                                X
                            </div>
                        </div>
                        <SDivider />
                        <table>
                            <thead>
                                <tr>
                                    <td>프로필 사진</td>
                                    <td>
                                        <div className="table_imgBox_profile">
                                            <div className="table_img"></div>
                                        </div>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>닉네임</td>
                                    <td>똘이맘</td>
                                </tr>
                                <tr>
                                    <td>계정</td>
                                    <td>mom@naver.com</td>
                                </tr>
                                <tr>
                                    <td>가입 소셜</td>
                                    <td>네이버</td>
                                </tr>
                                <tr>
                                    <td>가입일</td>
                                    <td>2022-07-14</td>
                                </tr>
                                <tr>
                                    <td>상태</td>
                                    <td>활동중</td>
                                </tr>
                                <tr>
                                    <td>프로젝트 생성 수</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>휴대전화</td>
                                    <td>미인증</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Modal>
            ) : (
                ""
            )}
            {pathName === "/" ? (
                <Modal isOpen={isModalOpen} style={modalCustomStyles} contentLabel="ModalComponent">
                    <div className="contentsModalBox">
                        <div className="contentsModalBox_title">
                            <div>건축가 정보</div>
                            <div
                                onClick={() => {
                                    setIsModalOpen(false);
                                }}
                            >
                                X
                            </div>
                        </div>
                        <SDivider />
                        <table>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>이미지</th>
                                    <th>이름</th>
                                    <th>회사명</th>
                                    <th>등록일</th>
                                    <th>선택</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>144</td>
                                    <td>
                                        <div className="table_imgBox">
                                            <div className="table_img"></div>
                                        </div>
                                    </td>
                                    <td>김박사</td>
                                    <td>건축박사사무소</td>
                                    <td>2022-06-28</td>
                                    <td>
                                        <div className="select_btn">선택</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>145</td>
                                    <td>
                                        <div className="table_imgBox">
                                            <div className="table_img"></div>
                                        </div>
                                    </td>
                                    <td>김박사</td>
                                    <td>건축박사사무소</td>
                                    <td>2022-06-28</td>
                                    <td>
                                        <div className="select_btn">선택</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>146</td>
                                    <td>
                                        <div className="table_imgBox">
                                            <div className="table_img"></div>
                                        </div>
                                    </td>
                                    <td>김박사</td>
                                    <td>건축박사사무소</td>
                                    <td>2022-06-28</td>
                                    <td>
                                        <div className="select_btn">선택</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>147</td>
                                    <td>
                                        <div className="table_imgBox">
                                            <div className="table_img"></div>
                                        </div>
                                    </td>
                                    <td>김박사</td>
                                    <td>건축박사사무소</td>
                                    <td>2022-06-28</td>
                                    <td>
                                        <div className="select_btn">선택</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Modal>
            ) : (
                ""
            )}
        </>
    );
}

export default ModalComponent;
