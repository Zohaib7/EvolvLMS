// NotificationScreenStyles.js
import {StyleSheet} from 'react-native';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import Fonts from '@Theme/Fonts';

export const styles = StyleSheet.create({
  notificationContainer: {
    flexDirection: 'row',
    paddingVertical: Metrics.verticalScale(20),
    backgroundColor: Colors.WHITE,
    borderColor: Colors.PROFILE_BORDER_COLOR,
    borderWidth: 1,
    borderRadius: Metrics.scale(10),
    marginVertical: Metrics.smallMargin,
    padding: Metrics.smallMargin,
  },
  notificationImage: {
    marginLeft: Metrics.baseMargin,
  },
  notificationDetails: {
    marginLeft: Metrics.baseMargin,
    width: '90%',
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  notificationTime: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  dotIndicator: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: Colors.GREEN,
    marginHorizontal: Metrics.smallMargin,
  },
  timeText: {
    ...Fonts.Regular(Fonts.Size.xxxSmall, Colors.GREEN),
    marginRight: Metrics.scale(60),
  },
  descriptionText: {
    ...Fonts.Regular(Fonts.Size.xxxSmall, Colors.NOTIFICATION_COLOR),
    lineHeight: 18,
  },
  imageWrapper: {
    borderRadius: Metrics.scale(50),
    width: Metrics.scale(55),
    height: Metrics.scale(55),
    borderWidth: 3,
    borderColor: '#fff',
    elevation: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    backgroundColor: Colors.DARK_GREY,
  },
  driverImage: {
    width: Metrics.scale(50),
    height: Metrics.scale(50),
  },
  unreadNotificationContainer: {
    flexDirection: 'row',
    paddingVertical: Metrics.verticalScale(20),
    backgroundColor: Colors.WHITE,
    borderTopColor: Colors.PROFILE_BORDER_COLOR,
    borderBottomColor: Colors.PROFILE_BORDER_COLOR,
    borderRightColor: Colors.PROFILE_BORDER_COLOR,
    borderWidth: 1,
    borderRadius: Metrics.scale(10),
    marginVertical: Metrics.smallMargin,
    padding: Metrics.smallMargin,
    borderLeftColor: Colors.APP_GREEN,
    borderLeftWidth: Metrics.smallMargin,
  },
});
