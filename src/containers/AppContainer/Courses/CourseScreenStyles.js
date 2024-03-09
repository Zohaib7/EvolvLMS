// CourseScreenStyles.js

import {StyleSheet} from 'react-native';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';

export default StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.SEARCH_BORDER,
    borderRadius: Metrics.scale(15),
    paddingVertical: Metrics.scale(15),
    paddingHorizontal: Metrics.scale(35),
  },
  root: {
    flex: 1,
  },
  container: {
    marginTop: Metrics.verticalScale(40),
    marginHorizontal: 20,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Metrics.baseMargin,
  },
  imgStyle: {
    height: 40,
    width: 40,
    borderRadius: 25,
  },
  iconStyle: {
    marginHorizontal: Metrics.baseMargin,
  },
  searchStyle: {
    ...Fonts.Medium(Fonts.Size.normal, Colors.SEARCH_TEXT),
    marginTop: Metrics.verticalScale(15),
  },
  flatlistStyle: {
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.verticalScale(50),
  },
});
