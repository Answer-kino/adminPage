import { Config } from "../common/Config";
import CustomAxios from "../common/CustomAxios";

const { list, regist, label } = Config.admin.contents;
export class Contents {
    static List = async ({ isLimit, isOffset }: any) => {
        const apiUrl = list;
        const { data } = await CustomAxios.get(apiUrl);

        return data.data;
    };
}
