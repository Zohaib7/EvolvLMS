// AnnouncementStyles.js

import {StyleSheet} from 'react-native';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';

export default StyleSheet.create({
  root: {
    marginBottom: Metrics.baseMargin,
    marginTop: Metrics.baseMargin,
  },
  container: {
    borderRadius: Metrics.scale(15),
    borderWidth: 1,
    borderColor: Colors.DISABLED_INPUT_BG,
    paddingVertical: Metrics.baseMargin,
    paddingHorizontal: Metrics.baseMargin,
    marginTop: Metrics.smallMargin,
    paddingBottom: Metrics.verticalScale(20),
    marginHorizontal: Metrics.scale(15),
    marginLeft: Metrics.scale(50),
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainTxt: {
    borderLeftWidth: 3,
    borderColor: Colors.PROFILE_BORDER_COLOR,
    marginHorizontal: Metrics.smallMargin,
    marginTop: Metrics.baseMargin,
  },
  msgTxt: {
    ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.MSG_COLOR),
    marginHorizontal: Metrics.scale(6),
    lineHeight: 18,
  },
  imgStyle: {position: 'absolute', bottom: 20, left: 6},
  announcementCont: {
    paddingVertical: Metrics.verticalScale(10),
    backgroundColor: Colors.WHITE,
    paddingHorizontal: Metrics.scale(10),
    marginBottom: Metrics.baseMargin,
    marginHorizontal: Metrics.smallMargin,
  },
  row: {flexDirection: 'row'},
  dateTxt: {
    ...Fonts.Light(Fonts.Size.xxxSmall, Colors.MSG_COLOR),
    alignSelf: 'flex-end',
    marginHorizontal: 20,
    marginTop: Metrics.smallMargin,
  },
  flexOne: {flex: 1},
  courseTxt: {
    marginTop: Metrics.smallMargin,
    paddingHorizontal: Metrics.baseMargin,
    width: '65%',
  },
  avaImg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lectTxt: {
    ...Fonts.SemiBold(Fonts.Size.xxxxSmall, Colors.APP_GREEN),
  },
});
