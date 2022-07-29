export default class Auth {
    public accessToken: string;
    public checkSum: string;

    private static _instance: Auth;

    private constructor() {
        this.accessToken = "";
        this.checkSum = "";
    }

    public static getInstance(): Auth {
        if (this._instance == null) {
            this._instance = new Auth();
        }

        return this._instance;
    }

    public checkSession() {
        let _accessToken = sessionStorage.getItem("accessToken");
        let _checkSum = sessionStorage.getItem("checkSum");

        if (_accessToken == null) {
            _accessToken = "";
        }

        if (_checkSum == null) {
            _checkSum = "";
        }

        this.accessToken = _accessToken;
        this.checkSum = _checkSum;

        if (this.accessToken.length > 1) {
            return true;
        }

        return false;
    }

    public getHeaderAuth() {
        return { accesstoken: this.accessToken, checksum: this.checkSum };
    }
}
