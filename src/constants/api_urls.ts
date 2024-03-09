const authController = 'Authentication';
const student = 'student';
const common = 'common';
const driver = 'driver';
export const SERVICE_CONFIG_URLS = {
  AUTH: {
    LOGIN: `${student}/authorize`,
    ME: `${authController}/me`,
    REQUEST_OTP: `${driver}/tokens/request-otp`,
    VERIFY_OTP: `${driver}/tokens/verify-otp`,
    PRIVACY_POLICY: `${driver}/personal/privacy-policy`,
  },
  STUDENT: {
    REQUEST_OTP: `${student}/tokens/request-otp`,
    VERIFY_OTP: `${student}/tokens/verify-otp`,
    GET_CITIES: `${student}/preference/cities`,
    USER_DETAILS: `${student}`,
    GET_LANGUAGES: `${student}/preference/languages`,
    UPDATE_LANGUAGE: `${student}/preference/language`,
    UPDATE_PROFILE:`${student}/update-profile`,
    GET_COURSES:`${student}/cohorts`,
    GET_CLASSES:`${student}/meetings`,
    GET_LECTURES:`${student}/lectures`,
    GET_CHAPTERS:`${student}/chapters`,
    GET_CONTENT:`${student}/content`,
    GET_DEVICES:`${student}/devices`,
    UPDATE_PICTURE:`${student}/update-profile/picture`,
    GET_QUIZES:`${student}/quizz-results`,
    CHAP_READ_STATUS:`${student}/chapters/`,
    REPORT_ISSUE:`${student}/report-issue`,
    UPLOAD_SCREENSHOT:`${student}/upload-file`,
    AUTH_REFRESH:`${student}/authorize/refresh`,
    GET_MEETING:`${student}/meetings/`,
    GET_CHAT_MESSAGES:`${student}/chats`,
    GET_ALL_CHAT_MESSAGES:`${student}/chats`,
    GET_ALL_NOTIFICATIONS:`${student}/notifications`
  },
};
