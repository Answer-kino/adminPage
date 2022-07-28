import React, { useEffect, useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";

const SPaginationContainer = styled.div`
    width: 100%;
`;

const SPaginationItems = styled.ul`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
`;
const SPaginationArray = styled.li`
    width: 20px;
    height: 20px;
    text-align: center;
    font-size: 18px;
    line-height: 20px;
    cursor: pointer;
`;

const SPaginationNumberContainer = styled.ul`
    display: flex;
    flex-direction: row;
    margin: 0 10px;
`;

const SPaginationNumber = styled.li`
    width: 30px;
    height: 20px;
    text-align: center;
    font-size: 18px;
    line-height: 20px;
    margin: 0 10px;
    cursor: pointer;
    text-decoration: ${({ isPageNum, isNowPageNum }: any) => (isPageNum === isNowPageNum ? "underline" : "")};
    opacity: ${({ isPageNum, isNowPageNum }: any) => (isPageNum === isNowPageNum ? 1 : 0.5)};
`;

export const Pagination = ({ isTotalCount, isViewCount, setIsLimit, setIsOffset }: any) => {
    const prevPageText = <AiOutlineLeft />;
    const firstPageText = <AiOutlineDoubleLeft />;
    const nextPageText = <AiOutlineRight />;
    const lastPageText = <AiOutlineDoubleRight />;
    const isPageCount = 10;

    const [isPageArr, setIsPageArr] = useState<number[]>([]);
    const [isNowPageNum, setIsNowPageNum] = useState(1);
    const [isMaxPageNum, setIsMaxPageNum] = useState(0);
    const [isFristPageNum, setIsFristPageNum] = useState(1);
    const [isLastPageNum, setIsLastPageNum] = useState(isPageCount);

    const setIsPageArrHandler = () => {
        const isNewPageArr = [];
        for (let num = isFristPageNum; num <= isLastPageNum; num++) {
            isNewPageArr.push(num);
        }
        setIsPageArr(isNewPageArr);
    };

    const pageNumClickEventHandler = () => (e: React.MouseEvent<HTMLElement>) => {
        const pageNum = Number(e.currentTarget.textContent);
        setIsNowPageNum(pageNum ?? isNowPageNum);
    };

    const leftArrowClickEventHandler = () => () => {
        if (isNowPageNum > 10 && isNowPageNum % 10 === 1) {
            setIsFristPageNum(isFristPageNum - isPageCount);
            setIsLastPageNum(Math.ceil(isLastPageNum / isPageCount) * isPageCount - isPageCount);
        }
        if (isNowPageNum > 1) {
            setIsNowPageNum(isNowPageNum - 1);
        }
    };

    const doubleLeftArrowClickEventHandler = () => () => {
        setIsNowPageNum(1);
        setIsFristPageNum(1);
        setIsLastPageNum(isPageCount);
    };

    const rightArrowClickEventHandler = () => () => {
        if (isNowPageNum % 10 == 0) {
            const lastPageNum = isLastPageNum + isPageCount;
            setIsFristPageNum(isFristPageNum + isPageCount);
            setIsLastPageNum(lastPageNum < isMaxPageNum ? lastPageNum : isMaxPageNum);
        }
        if (isNowPageNum < isMaxPageNum) {
            setIsNowPageNum(isNowPageNum + 1);
        }
    };

    const doubleRightArrowClickEventHandler = () => () => {
        const fistPageNum = 1 + Math.floor(isMaxPageNum / 10) * 10;
        setIsNowPageNum(isMaxPageNum);
        setIsFristPageNum(fistPageNum);
        setIsLastPageNum(isMaxPageNum);
    };

    // Pagination Page Init Data
    useEffect(() => {
        setIsPageArrHandler();
    }, [isFristPageNum]);

    // Pagination MaxPageNum Init
    useEffect(() => {
        const count = Math.ceil(isTotalCount / isViewCount);
        setIsMaxPageNum(count);
    }, [isTotalCount]);

    useEffect(() => {
        const _Offset = 1 + isViewCount * (isNowPageNum - 1);
        const _Limit = isViewCount * isNowPageNum;

        setIsOffset(_Offset);
        setIsLimit(_Limit > isTotalCount ? isTotalCount : _Limit);
    }, [isNowPageNum]);
    return (
        <SPaginationContainer style={{ display: "flex" }}>
            <SPaginationItems>
                <SPaginationArray onClick={doubleLeftArrowClickEventHandler()}>{firstPageText}</SPaginationArray>
                <SPaginationArray onClick={leftArrowClickEventHandler()}>{prevPageText}</SPaginationArray>
                <SPaginationNumberContainer>
                    {isPageArr.map(pageNum => {
                        return (
                            <SPaginationNumber key={pageNum} isPageNum={pageNum} isNowPageNum={isNowPageNum} onClick={pageNumClickEventHandler()}>
                                {pageNum}
                            </SPaginationNumber>
                        );
                    })}
                </SPaginationNumberContainer>
                <SPaginationArray onClick={rightArrowClickEventHandler()}>{nextPageText}</SPaginationArray>
                <SPaginationArray onClick={doubleRightArrowClickEventHandler()}>{lastPageText}</SPaginationArray>
            </SPaginationItems>
        </SPaginationContainer>
    );
};
