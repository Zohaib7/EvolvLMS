// CourseDetailStyles.js

import {StyleSheet} from 'react-native';
import Fonts from '@Theme/Fonts';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';

export default StyleSheet.create({
  text: {
    ...Fonts.Medium(Fonts.Size.small),
  },
  bottomLine: {
    width: '100%',
    height: 1,
    position: 'absolute',
    backgroundColor: Colors.PLACEHOLDER_COLOR,
    bottom: 0,
    marginRight: 'auto',
  },
  teacherCont: {
    paddingVertical: Metrics.verticalScale(8),
    borderRadius: Metrics.scale(32),
    borderColor: Colors.DARK_BORDER,
    borderWidth: 1,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 10,
    marginTop: Metrics.smallMargin,
    width: '50%',
  },
  teacherWrapper: {flexDirection: 'row', alignItems: 'center'},
  teacherTxt: {color: Colors.TEACHER_COLOR},
  root: {flex: 1},
  container: {marginVertical: Metrics.smallMargin, marginHorizontal: 10},
  cohortStyle: {...Fonts.SemiBold(Fonts.Size.xLarge, Colors.DARK_BLACK)},
  btnContainer: {
    alignSelf: 'flex-end',
    marginTop: Metrics.baseMargin,
  },
  btnWrapper: {
    paddingVertical: Metrics.verticalScale(16),
    backgroundColor: Colors.APP_GREEN,
    width: '25%',
    borderRadius: Metrics.scale(10),
    marginTop: Metrics.baseMargin,
    alignItems: 'center',
  },
  lectureTxt: {
    ...Fonts.SemiBold(Fonts.Size.xxxxSmall, Colors.WHITE),
  },
  dateTxt: {...Fonts.Medium(Fonts.Size.xxxSmall, Colors.RED)},
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.SEPARATOR_COLOR,
    marginTop: Metrics.doubleBaseMargin,
    marginBottom: Metrics.baseMargin,
  },
  teacherHead: {...Fonts.Medium(Fonts.Size.xxSmall, Colors.DARK_BLACK)},
  top: {marginTop: Metrics.baseMargin},
  verticalStyle: {marginVertical: Metrics.baseMargin},
});
