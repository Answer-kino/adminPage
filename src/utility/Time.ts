/**
 *
 * @param date
 * @type mysql_TimeStamp
 */
export const timeStampHyphen = (date: string) => {
    // 2022-06-28
    const timeStamp = date.split("T")[0].split("-").join(".");

    return timeStamp;
};

export const timeStampDot = (date: string) => {
    // 2022.06.28
    const timeStamp = date.split("T")[0].split("-").join(".");

    return timeStamp;
};
