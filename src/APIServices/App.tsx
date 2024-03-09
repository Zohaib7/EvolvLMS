import {API_CONFIG, CONTENT_TYPE, PAGE_SIZE} from '@Constants/api';
import {apiRequest} from '@Service/ServiceAction';
import {SERVICE_CONFIG_URLS} from '../constants/api_urls';

export const getUserDetails = async (params: any) => {
  const {data} = await apiRequest({
    url: SERVICE_CONFIG_URLS.STUDENT.USER_DETAILS,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
  });
  return data;
};

export const updateProfile = async (params: any) => {
  const {data} = await apiRequest({
    url: SERVICE_CONFIG_URLS.STUDENT.UPDATE_PROFILE,
    method: API_CONFIG.PUT,
    params,
    showToast: true,
  });
  return data;
};

export const getCourses = async (params: any) => {
  const {data} = await apiRequest({
    url: SERVICE_CONFIG_URLS.STUDENT.GET_COURSES,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
  });

  return data;
};

export const getClasses = async (params: any) => {
  const {data} = await apiRequest({
    url: SERVICE_CONFIG_URLS.STUDENT.GET_CLASSES,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
  });

  return data;
};

export const getLectures = async (params: any) => {
  const {data} = await apiRequest({
    url: SERVICE_CONFIG_URLS.STUDENT.GET_LECTURES,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
  });

  return data;
};
export const getChapters = async (params: any) => {
  const {data} = await apiRequest({
    url: `${SERVICE_CONFIG_URLS.STUDENT.GET_CHAPTERS}?cohortId=${params?.id}`,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
  });

  return data;
};

export const getContent = async (params: any) => {
  const {data} = await apiRequest({
    url: `${SERVICE_CONFIG_URLS.STUDENT.GET_CONTENT}?cohortId=${params?.id}&chapterId=${params.chapId}`,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
  });

  return data;
};

export const getDevices = async (params: any) => {
  const {data} = await apiRequest({
    url: SERVICE_CONFIG_URLS.STUDENT.GET_DEVICES,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
  });

  return data;
};

export const uploadPic = async (params: any) => {
  const {data} = await apiRequest({
    url: SERVICE_CONFIG_URLS.STUDENT.UPDATE_PICTURE,
    method: API_CONFIG.PUT,
    showSuccessToast: true,
    formData: true,
    config: {
      headers: {
        'Content-Type': CONTENT_TYPE.FORM_DATA,
      },
    },
    params,
  });
  return data;
};

export const getQuizes = async (params: any) => {
  const {data} = await apiRequest({
    url: SERVICE_CONFIG_URLS.STUDENT.GET_QUIZES,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
  });

  return data;
};

export const markReadStatus = async (params: any) => {
  const {data} = await apiRequest({
    url: `${SERVICE_CONFIG_URLS.STUDENT.CHAP_READ_STATUS}:${params.chapterId}/read-status/:${params.status}`,
    method: API_CONFIG.POST,
    showSuccessToast: true,
    params,
  });

  return data;
};

export const reportIssue = async (params: any) => {
  const {data} = await apiRequest({
    url: SERVICE_CONFIG_URLS.STUDENT.REPORT_ISSUE,
    method: API_CONFIG.POST,
    showSuccessToast: true,
    params,
  });
  return data;
};

export const uploadScreenshot = async (params: any) => {
  const {data} = await apiRequest({
    url: SERVICE_CONFIG_URLS.STUDENT.UPLOAD_SCREENSHOT,
    method: API_CONFIG.POST,
    showSuccessToast: true,
    showLoader: false,
    formData: true,
    config: {
      headers: {
        'Content-Type': CONTENT_TYPE.FORM_DATA,
      },
    },
    params,
  });
  return data;
};

export const authRefresh = async (params: any) => {
  const {data} = await apiRequest({
    url: SERVICE_CONFIG_URLS.STUDENT.AUTH_REFRESH,
    method: API_CONFIG.POST,
    showLoader: false,
    params,
  });
  return data;
};

export const getMeeting = async (params: any) => {
  const {data} = await apiRequest({
    url: `${SERVICE_CONFIG_URLS.STUDENT.GET_MEETING}${params.meetingId}`,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
    showToast: false,
  });

  return data;
};

export const getChatMessages = async (params: any) => {
  const {data} = await apiRequest({
    url: `${SERVICE_CONFIG_URLS.STUDENT.GET_CHAT_MESSAGES}/${params?.chatId}/messages`,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
    showToast: false,
  });

  return data;
};

export const getAllChatMessages = async (params: any) => {
  const {data} = await apiRequest({
    url: SERVICE_CONFIG_URLS.STUDENT.GET_ALL_CHAT_MESSAGES,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
    showToast: false,
  });

  return data;
};

export const getNotifications = async (params: any) => {
  const {data} = await apiRequest({
    url: SERVICE_CONFIG_URLS.STUDENT.GET_ALL_NOTIFICATIONS,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
    showToast: false,
  });

  return data;
};
