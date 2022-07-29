import { Config } from "../common/Config";
import CustomAxios from "../common/CustomAxios";

const { list, regist, label } = Config.admin.contents;
export class Contents {
    static List = async ({ isLimit, isOffset, isActive }: any) => {
        let apiUrl = list;
        if (isLimit || isOffset || isActive) apiUrl += "?";

        if (isLimit) apiUrl += `limit=${isLimit}&`;
        if (isOffset) apiUrl += `offset=${isOffset}&`;
        if (typeof isActive === "number") apiUrl += `active=${isActive}&`;

        const { data } = await CustomAxios.get(apiUrl);

        return data.data;
    };
}
