import React, { useEffect, useState } from "react";

export const Pagination = ({ isTotalCount, setIsLimit, setIsOffset }: any) => {
    const prevPageText = "⟨";
    const firstPageText = "«";
    const nextPageText = "⟩";
    const lastPageText = "»";
    const isPageCount = 10;

    const [isPageArr, setIsPageArr] = useState<number[]>([]);
    const [isNowPageNum, setIsNowPageNum] = useState(1);
    const [isMaxPageNum, setIsMaxPageNum] = useState(0);
    const [isFristPageNum, setIsFristPageNum] = useState(1);
    const [isLastPageNum, setIsLastPageNum] = useState(10);

    const setIsPageArrHandler = () => {
        const isNewPageArr = [];
        for (let num = isFristPageNum; num < isLastPageNum; num++) {
            isNewPageArr.push(num);
        }
        setIsPageArr(isNewPageArr);
    };

    // Pagination Page Init Data
    useEffect(() => {
        setIsPageArrHandler();
    }, []);

    useEffect(() => {
        const count = Math.trunc(isTotalCount / 10);
        setIsMaxPageNum(count);
    }, [isTotalCount]);

    return (
        <div style={{ display: "flex" }}>
            {/* 맨 처음으로 */}
            {/* setIsFristPageNum(1), setIsLastPageNum(10), setIsNowPageNum(1) */}
            {/* setIsLimit(7 + (7 * isNowPageNum)), setIsOffset(7 * isNowPageNum) */}

            {/* 다음 페이지네이션 */}
            {/*  */}

            {/* 페이지네이션 숫자 */}
            {/* onClick = setIsNowPageNum(pageNum) */}
            {/* style = color : isNowPageNum === pageNum ? 변경된 색 : 기존 색 */}

            {/* 이전 페이지네이션 */}
            {/* 맨 끝으로 */}
            <div>{firstPageText}</div>
            <div>{prevPageText}</div>
            <div style={{ display: "flex" }}>
                {isPageArr.map(pageNum => {
                    return (
                        <div key={pageNum}>
                            <p>{pageNum}</p>
                        </div>
                    );
                })}
            </div>
            <div>{nextPageText}</div>
            <div>{lastPageText}</div>
        </div>
    );
};
