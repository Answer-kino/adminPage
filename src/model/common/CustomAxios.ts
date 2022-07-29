import axios, { AxiosInstance } from "axios";
import Auth from "./Auth";

const auth = Auth.getInstance();

export const customAxios: AxiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER}`,
    headers: {
        accept: "application/json",
        "content-type": "application/json",
        withCredentials: true
    }
});

export default class CustomAxios {
    public static async get(endPoint: string) {
        const config = { headers: auth.getHeaderAuth() };
        const result = await customAxios.get(endPoint, config);
        return result;
    }

    public static async put(endPoint: string, payload: any) {
        const config = { headers: auth.getHeaderAuth() };
        const result = await customAxios.put(endPoint, payload, config);
        return true;
    }

    public static async patch(endPoint: string, payload: any) {
        const config = { headers: auth.getHeaderAuth() };
        const result = await customAxios.patch(endPoint, payload, config);
        return true;
    }

    public static async post(endPoint: string, payload: any) {
        const config = { headers: auth.getHeaderAuth() };
        const result = await customAxios.post(endPoint, payload, config);
        return result;
    }

    public static async delete(endPoint: string, data: any) {
        const config = { headers: auth.getHeaderAuth() };
        Object.assign(config, { data: data });
        const result = await customAxios.delete(endPoint, config);
        return result;
    }
}
