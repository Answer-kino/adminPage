import { inputReset } from "@src/assets/style/variables";
import styled from "styled-components";

// height : 30px
const SInput_50p_30 = styled.input`
    ${inputReset}
    width: 50%;
    height: 30px;
    font-size: 18px;
    ::placeholder {
        text-align: ${({ placeRow }: any) => (placeRow === "left" ? "left" : "right")};
        margin: 5px;
    }
`;

const SInput_100p_30 = styled.input`
    ${inputReset}
    width: 100%;
    height: 30px;
    font-size: 18px;
    ::placeholder {
        text-align: ${({ placeRow }: any) => (placeRow === "left" ? "left" : "right")};
        margin: 5px;
    }
`;

const SInput_100_30 = styled.input`
    ${inputReset}
    width: 100px;
    height: 30px;
    font-size: 18px;
    ::placeholder {
        text-align: ${({ placeRow }: any) => (placeRow === "left" ? "left" : "right")};
        margin: 5px;
    }
`;

// hidden
const SInput_Hidden = styled.input`
    display: none;
`;

export { SInput_100p_30, SInput_50p_30, SInput_100_30, SInput_Hidden };
