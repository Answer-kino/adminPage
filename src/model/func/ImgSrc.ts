import { Config } from "../common/Config";

export const imgSrc = (saveName: string) => {
    const imgSrc = Config.common.imgs + saveName;

    return imgSrc;
};
