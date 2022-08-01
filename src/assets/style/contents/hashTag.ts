import styled from "styled-components";

export const SHashTagContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex: 4;
    gap: 5px;
`;

export const SHashTagTitle = styled.p`
    font-size: 20px;
    font-weight: 600;
`;

export const SHashTagBox = styled.div`
    width: 23%;
    height: 40px;
    border: 1px solid black;
    background: ${({ theme }: any) => theme.bg3};
    text-align: center;
    cursor: pointer;

    input {
        display: none;
    }

    input:checked ~ * {
        background: ${({ theme }: any) => theme.bg4};
    }

    label {
        width: 100%;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
    }
`;
