import styled from "styled-components";

export const SRMContainer = styled.div`
    width: 100%;
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 16px;
`;
export const SRMBody = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`;

export const SRMTitle = styled.span`
    font-size: 24px;
    font-weight: 700;
    margin: 10px;
`;

export const SRMCol = styled.div`
    display: flex;
    margin: 10px;
`;
export const SRMLeftSide = styled.div`
    width: 25%;
    max-width: 100px;
    height: 40px;
    line-height: 40px;
`;
export const SRMRightSide = styled.div`
    display: flex;
    width: 75%;
    min-height: 40px;
    line-height: 40px;
`;

export const SRMImgPreview = styled.div`
    max-width: 400px;
    height: 200px;
    margin-top: 10px;
    padding: 0 10px;
    border: 1px dashed ${({ theme }) => theme.borderLine};
    background: ${({ theme }) => theme.bg};
`;

export const SRMFooter = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`;
