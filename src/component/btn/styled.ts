import { btnReset } from "@src/assets/style/variables";
import styled from "styled-components";

export const SBtn_50_30 = styled.button`
    ${btnReset}
    width: 50px;
    height: 30px;
    text-align: center;
    background: ${({ theme }) => theme.bg4};
    border: 1px solid ${({ theme }) => theme.borderLine};
`;

export const SBtn_100_30 = styled.button`
    ${btnReset}
    width: 100px;
    height: 30px;
    text-align: center;
    background: ${({ theme }) => theme.bg3};
    border: 1px solid ${({ theme }) => theme.borderLine};
    :hover {
        background: ${({ theme }) => theme.bg4};
    }
`;
