// HomeScreenStyles.js

import {StyleSheet} from 'react-native';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';

export default StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  bellStyle: {
    marginHorizontal: Metrics.baseMargin,
  },
  greetingStyle: {
    flexDirection: 'row',
    marginTop: Metrics.baseMargin,
  },
  nameStyle: {
    ...Fonts.SemiBold(Fonts.Size.xxLarge, Colors.DARK_BLACK),
  },
  classContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  classTxtStyle: {
    ...Fonts.SemiBold(Fonts.Size.xLarge, Colors.HEADING_COLOR),
  },
  seeAllTxtStyle: {
    ...Fonts.SemiBold(Fonts.Size.xxxSmall, Colors.GREEN),
    marginHorizontal: Metrics.smallMargin,
  },
  top: {
    marginTop: 20,
  },
  lectureWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  lectureTxt: {
    ...Fonts.SemiBold(Fonts.Size.xLarge, Colors.HEADING_COLOR),
  },
  quizWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  quizTxt: {
    ...Fonts.SemiBold(Fonts.Size.xLarge, Colors.HEADING_COLOR),
  },
  courseWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  courseTxt: {
    ...Fonts.SemiBold(Fonts.Size.xLarge, Colors.HEADING_COLOR),
  },
});
