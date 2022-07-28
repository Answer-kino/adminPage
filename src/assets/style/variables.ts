import { css } from "styled-components";

export const v = {
    sidebarWidth: "250px",
    smSpacing: "8px",
    mdSpacing: "16px",
    lgSpacing: "24px",
    xlSpacing: "32px",
    xxlSpacing: "48px",
    borderRadius: "6px"
};

export const btnReset = css`
    font-family: inherit;
    outline: none;
    border: none;
    background: none;
    letter-spacing: inherit;
    color: inherit;
    font-size: inherit;
    text-align: inherit;
    padding: 0;
`;

export const selectReset = css`
    /* select box 스타일 초기화 */
    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    /* IE에서 Select box 화살표 제거 */
    select::-ms-expand {
        display: none;
    }
`;

export const inputReset = css`
    /* input 기본 스타일 초기화 */
    input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    /* IE10 이상에서 input box에 추가된 지우기 버튼 제거 */
    input::-ms-clear {
        display: none;
    }

    /* input type number 에서 화살표 제거 */
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-out-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    /*Firefox에서 input number 화살표 없애는 방법*/
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        -mox-appearance: none;
        appearance: none;
    }

    /* input number의 외형을 텍스트필드로 바꿔줘야한다 */
    input[type="number"] {
        -moz-appearance: textfield;
    }
`;
