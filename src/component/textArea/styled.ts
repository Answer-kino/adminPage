import styled from "styled-components";

export const STextArea = styled.textarea`
    width: ${({ width }: any) => width};
    height: ${({ height }: any) => height};
    min-height: ${({ minHeight }: any) => minHeight};
    resize: ${({ resize }: any) => resize};
    padding: 10px;
`;
