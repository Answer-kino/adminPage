export class Path {
    static Contents = (src: string) => {
        switch (src) {
            case "view":
                return "/contents/";
            case "regist":
                return "/contents/regist";
            default:
                return "";
        }
    };

    static Architect = (src: string) => {
        switch (src) {
            case "view":
                return "/architect/";
            case "regist":
                return "/architect/regist";
            default:
                return "";
        }
    };
}
