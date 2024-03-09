import ZoomUs, {ZoomEmitter} from 'react-native-zoom-us';
import {NativeEventEmitter} from 'react-native';
import {ZOOM_KEYS} from '@Constants/constants';

const ZoomService = {
  initializeZoomSDK,
  checkIsZoomMeetingOngoing,
  startZoomMeeting,
  joinZoomMeeting,
  leaveZoomMeeting,
};

async function initializeZoomSDK() {
  try {
    const initializedZoomSDK = await ZoomUs.initialize({
      clientKey: ZOOM_KEYS.SDK_KEY,
      clientSecret: ZOOM_KEYS.SDK_SECRET_KEY,
    });
    console.log(initializedZoomSDK);
    return initializedZoomSDK;
  } catch (error) {
    console.log('Error in initializing Zoom SDK', error);
    throw new Error(error);
  }
}

function checkIsZoomMeetingOngoing() {
  const zoomEmitter = new NativeEventEmitter(ZoomEmitter);
  try {
    zoomEmitter.addListener('MeetingEvent', ({event, status, ...params}) => {
      console.log({event, status, params});

      if (status === 'MEETING_STATUS_CONNECTING') {
        return true;
      }

      if (status === 'MEETING_STATUS_DISCONNECTING') {
        return false;
      }
    });
  } catch (e) {
    console.log(e, 'EEEEEEEEEEEEEEEEEEEEEEEE');
  }
}

async function startZoomMeeting(
  meetingNumber = '',//meeting detail
  userName = '',//email
  zoomAccessToken = '',//detail
  userId = '',
  rest,
) {
  try {
    const startMeetingResult = await ZoomUs.startMeeting({
      meetingNumber,
      userId,
      userName,
      zoomAccessToken,
      ...rest,
    });

    console.log({startMeetingResult});
  } catch (error) {
    console.log('Error in Starting Zoom Meeting', error);
    throw new Error(error);
  }
}

async function joinZoomMeeting(
  meetingNumber = '',
  userName = '',
  autoConnectAudio = true,
  password = '',
  rest,
) {
  
  try {
    const joinedMeeting = await ZoomUs.joinMeeting({
      meetingNumber,
      userName,
      autoConnectAudio,
      password,
      ...rest,
    });

    return joinedMeeting;
  } catch (error) {
    console.log('Error in Joining Zoom Meeting', error);
    throw new Error(error);
  }
}

async function leaveZoomMeeting() {
  try {
    const leaveMeetingResult = await ZoomUs.leaveMeeting();

    return leaveMeetingResult;
  } catch (error) {
    throw new Error(error);
  }
}

export default ZoomService;
