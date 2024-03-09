import {BottomSheetName} from '@Constants/user';
import {DATE_FORMATS, getFormatedDateTime} from './DateUtils';
import {CHAT_TYPE} from '@Constants/constants';

//Write route name here
const ShowTopSheet = {};
const ShowDate = {};

const CourseDetail = {
  COURSE_DETAIL: 'COURSE_DETAIL',
};
const Profile = {
  PROFILE: 'PROFILE',
};

export const RoutesHandleUtil = routeName => {
  let routes = [];

  if (CourseDetail[routeName]) {
    routes.push('CourseDetail');
  }

  if (Profile[routeName]) {
    routes.push('Profile');
  }

  return routes;
};
export const RouteHandleNames = {
  CourseDetail: 'CourseDetail',
  Profile: 'Profile',
};

export const IsRideStarted = rideStatus => {
  if (
    rideStatus === BottomSheetName.REACHING_PICKUP_POINT ||
    rideStatus === BottomSheetName.WAITING_AND_START_TRIP ||
    rideStatus === BottomSheetName.END_TRIP ||
    rideStatus === BottomSheetName.FINISH_TRIP_WITH_RATING
  ) {
    return true;
  } else {
    return false;
  }
};

export const IsShowStops = rideStatus => {
  if (
    rideStatus === BottomSheetName.WAITING_AND_START_TRIP ||
    rideStatus === BottomSheetName.END_TRIP ||
    rideStatus === BottomSheetName.FINISH_TRIP_WITH_RATING
  ) {
    return true;
  } else {
    return false;
  }
};

export const IsPickupShow = rideStatus => {
  if (
    rideStatus === BottomSheetName.WAITING_AND_START_TRIP ||
    rideStatus === BottomSheetName.END_TRIP
  ) {
    return false;
  } else {
    return true;
  }
};

export const IsDropoffShow = rideStatus => {
  if (rideStatus === BottomSheetName.REACHING_PICKUP_POINT) {
    return false;
  } else {
    return true;
  }
};

export const IsMapDirectionShow = (
  rideStatus,
  rideDetails,
  cb,
  topBarMapLocationCoordinatesZustand,
  isKilledZustand,
) => {
  let payload = {};
  if (rideStatus === BottomSheetName.REACHING_PICKUP_POINT) {
    payload.name = rideDetails?.pickupAndDropoff?.[0]?.name;
    payload.address = rideDetails?.pickupAndDropoff?.[0]?.address;
    payload.isArrivalTime = true;
    payload.arrivalTime = getFormatedDateTime(
      rideDetails?.arrivalETA,
      DATE_FORMATS.ARRIVAL_TIME,
    );
    payload.cb = cb;
    payload.isStartMapIcon = false;
  } else if (
    rideStatus === BottomSheetName.WAITING_AND_START_TRIP ||
    rideStatus === BottomSheetName.END_TRIP
  ) {
    payload.name = topBarMapLocationCoordinatesZustand?.name;
    payload.address = topBarMapLocationCoordinatesZustand?.address;
    payload.isArrivalTime = false;
    payload.arrivalTime = getFormatedDateTime(
      rideDetails?.arrivalETA,
      DATE_FORMATS.ARRIVAL_TIME,
    );
    payload.cb = cb;
    payload.isStartMapIcon = false;
  }

  return payload;
};
