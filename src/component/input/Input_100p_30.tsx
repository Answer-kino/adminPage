import React from "react";
import { SInput_100p_30 } from "./styled";

const Input_100p_30 = ({ placeholder, placeRow, blurEnvent }: any) => {
    return (
        <>
            <SInput_100p_30 placeholder={placeholder} placeRow={placeRow} onBlur={blurEnvent} />
        </>
    );
};

export default Input_100p_30;
