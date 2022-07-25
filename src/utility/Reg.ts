const CHECK_SPACE = /\s+/;
const ONLY_NUMBER = /^[0-9]*$/;
const ONLY_ENGLISH = /^[a-zA-Z]*$/;
const EMAIL_CHECK = /\w+@\w+\.\w+(\.\w+)?/;
const TEL_NUMBERS_CHECK = /^\d{2,3}-\d{3,4}-\d{4}$/;
const PHONE_NUMBERS_CHECK = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
const IDENTITY_CHECK = /\d{6}\-[1-4]\d{6}/;
const POSTAL_CODE_CHECK = /^\d{3}-\d{2}$/;

export const checkSpace = (str: string) => {
    return CHECK_SPACE.test(str);
};

export const onlyNumber = (str: string) => {
    return ONLY_NUMBER.test(str);
};

export const onlyEnglish = (str: string) => {
    return ONLY_ENGLISH.test(str);
};

export const checkEmail = (str: string) => {
    return EMAIL_CHECK.test(str);
};

export const checkTelNumber = (str: string) => {
    return TEL_NUMBERS_CHECK.test(str);
};

export const checkPhonNumber = (str: string) => {
    return PHONE_NUMBERS_CHECK.test(str);
};

export const checkIdentity = (str: string) => {
    return IDENTITY_CHECK.test(str);
};

export const checkPostCode = (str: string) => {
    return POSTAL_CODE_CHECK.test(str);
};
