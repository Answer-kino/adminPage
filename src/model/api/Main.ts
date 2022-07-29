import { Config } from "../common/Config";
import CustomAxios from "../common/CustomAxios";

const { dashboard } = Config.admin.main;
export class Main {
    static DashBoard = async () => {
        const apiUrl = dashboard;

        const { data } = await CustomAxios.get(apiUrl);

        return data.data[0];
    };
}
