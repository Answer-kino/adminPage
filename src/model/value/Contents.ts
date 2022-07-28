import React from "react";

// input component
const SInput_100_30 = React.lazy(() => import("@src/component/input/Input_100_30"));
const SInput_50p_30 = React.lazy(() => import("@src/component/input/Input_50p_30"));
const SInput_100p_30 = React.lazy(() => import("@src/component/input/Input_100p_30"));
const SInput_Hidden = React.lazy(() => import("@src/component/input/Input_Hidden"));

const housePlanDashBoard = [
    {
        name: "출처",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "전원속의 내집",
        placeRow: "left"
    },
    {
        name: "가격",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "4억원대",
        placeRow: "left"
    },
    {
        name: "위치",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "경기도 양평군 (시,군구 까지만 입력)",
        placeRow: "left"
    },
    {
        name: "가족구성원",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "다섯 가족",
        placeRow: "left"
    },
    {
        name: "스타일",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "모던",
        placeRow: "left"
    }
];

const housePlan = [
    {
        name: "대지위치",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "경기도 양평군 강상면 교평리 38-41",
        placeRow: "left"
    },
    {
        name: "대지면적",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "310m2(93.77평)",
        placeRow: "left"
    },
    {
        name: "건물규모",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "지상 2층 + 옥상",
        placeRow: "left"
    },
    {
        name: "연면적",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "181.86m2 (37.16평)",
        placeRow: "left"
    },
    {
        name: "건폐율",
        value: "",
        ElementTag: SInput_50p_30,
        placeholder: "39.63",
        placeRow: "left"
    },
    {
        name: "용적률",
        value: "",
        ElementTag: SInput_50p_30,
        placeholder: "52.68",
        placeRow: "left"
    },
    {
        name: "주차대수",
        value: "",
        ElementTag: SInput_50p_30,
        placeholder: "각 2대",
        placeRow: "left"
    },
    {
        name: "최고높이",
        value: "",
        ElementTag: SInput_50p_30,
        placeholder: "8.2",
        placeRow: "left"
    },
    {
        name: "구조",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "기초 –철근콘크리트 매트기초 / 지상 - 철근콘크리트",
        placeRow: "left"
    },
    {
        name: "단열재",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "비드법보온판 2종1호",
        placeRow: "left"
    },
    {
        name: "담장재",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "두라스택 큐블록 Q3",
        placeRow: "left"
    },
    {
        name: "창호재",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "독일 알루플라스트 시스템창호 39T",
        placeRow: "left"
    },
    {
        name: "열회수환기장치",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "벽부형 열회수환기장치 아인스 에어탱크 1",
        placeRow: "left"
    },
    {
        name: "에너지원",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "LPG",
        placeRow: "left"
    },
    {
        name: "구조설계",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "디자인하우스",
        placeRow: "left"
    },
    {
        name: "디자인",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "괃데오도르. 윤현정",
        placeRow: "left"
    },
    {
        name: "설계",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "호재건축사사무소",
        placeRow: "left"
    },
    {
        name: "감리",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "괃데오도르",
        placeRow: "left"
    },
    {
        name: "시공",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "XLV주식회사",
        placeRow: "left"
    }
];

const interiorSource = [
    {
        name: "출처",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "전원속의 내집",
        placeRow: "left"
    },
    {
        name: "내부마감재",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "벽 – 친환경 도장 / 바닥 – 석재 타일",
        placeRow: "left"
    },
    {
        name: "욕실 및 주방타일",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "수입 타일",
        placeRow: "left"
    },
    {
        name: "수전 등 욕실기기",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "아메이칸스탠다드",
        placeRow: "left"
    },
    {
        name: "주방가구,붙박이장",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "짜임시스",
        placeRow: "left"
    },
    {
        name: "계단재,난간",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "느릅나무 고재 계단판 + 평철 환봉",
        placeRow: "left"
    },
    {
        name: "현관문",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "조은현관문",
        placeRow: "left"
    },
    {
        name: "중문 및 방문",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "나무대장간",
        placeRow: "left"
    },
    {
        name: "데크재",
        value: "",
        ElementTag: SInput_100p_30,
        placeholder: "방부목 19mm",
        placeRow: "left"
    }
];

export { housePlanDashBoard, housePlan, interiorSource };
