export const Config = {
    // back-end-point
    server: {
        admin: "http://api.cm.house/admin/"
    },
    fileSize: {
        imgs: 5242880
    },
    mimeType: {
        contents: ["image/jpeg", "image/png"]
    },

    common: {
        // back-end-img 불러오기
        imgs: "http://api.cm.house/imgs/"
    },

    admin: {
        // 로그인
        login: "login",

        // 메인화면
        main: {
            dashboard: "dashBoard"
        },

        // 콘텐츠(빌딩아이디어)
        contents: {
            regist: "building/regist",
            list: "building/list",
            hashTag: "building/label",
            detail: "building/:ideaIdx/select".split(":ideaIdx"),
            update: "building/:ideaIdx/update".split(":ideaIdx"),
            delete: "building/:ideaIdx/delete".split(":ideaIdx")
        },

        // 건축가
        architect: {
            regist: "architect/regist",
            list: "architect/list",
            detail: "architect/:architectIdx/select".split(":architectIdx"),
            update: "architect/:architectIdx/update".split(":architectIdx"),
            delete: "architect/:architectIdx/delete".split(":architectIdx")
        },

        // 회원 관리
        customer: {
            list: "customer/list",
            detail: "customer/:userIdx/select".split(":userIdx")
        }
    }
};
