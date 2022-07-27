import styled from "styled-components";

import { v } from "@src/assets/style/variables";

export const SLayout = styled.div`
    display: flex;
`;

export const SMain = styled.main`
    padding: 0 calc(${v.xxlSpacing});

    h1 {
        font-size: 14px;
    }
`;
