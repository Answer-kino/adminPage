import React from "react";
import { STextArea } from "./styled";

const CTextArea = ({ width, height, minHeight, resize, placeHolder }: any) => {
    return <STextArea width={width} height={height} minHeight={minHeight} resize={resize} placeholder={placeHolder}></STextArea>;
};

export default CTextArea;
