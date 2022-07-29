import axios, { AxiosInstance } from "axios";
import Auth from "./Auth";
import { Config } from "./Config";

const auth = Auth.getInstance();

export const customAxios: AxiosInstance = axios.create({
    baseURL: `${Config.server.admin}`,
    headers: {
        accept: "application/json",
        "content-type": "application/json",
        withCredentials: true
    }
});

export const customAxiosImgs: AxiosInstance = axios.create({
    baseURL: `${Config.common.imgs}`,
    headers: {
        accept: "application/json",
        "content-type": "application/json",
        withCredentials: true
    }
});

export default class CustomAxios {
    public static async get(endPoint: string) {
        const header = { headers: auth.getHeaderAuth() };
        const result = await customAxios.get(endPoint, header);
        return result;
    }

    public static async put(endPoint: string, payload: any) {
        const header = { headers: auth.getHeaderAuth() };
        const result = await customAxios.put(endPoint, payload, header);
        return true;
    }

    public static async patch(endPoint: string, payload: any) {
        const header = { headers: auth.getHeaderAuth() };
        const result = await customAxios.patch(endPoint, payload, header);
        return true;
    }

    public static async post(endPoint: string, payload: any) {
        const header = { headers: auth.getHeaderAuth() };
        const result = await customAxios.post(endPoint, payload, header);
        return result;
    }

    public static async delete(endPoint: string, data: any) {
        const header = { headers: auth.getHeaderAuth() };
        Object.assign(header, { data: data });
        const result = await customAxios.delete(endPoint, header);
        return result;
    }
}
