// AuthLoginStyles.js

import {StyleSheet} from 'react-native';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';

export default StyleSheet.create({
  Input: {
    marginBottom: Metrics.verticalScale(60),
  },
  underLineBTnStyle: {
    ...Fonts.SemiBold(Fonts.Size.medium, Colors.BLUE_LINK),
  },
  inputWrapperWidth: {
    width: '100%',
  },
  bottomWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 270,
    // marginBottom: Metrics.baseMargin,
  },
  btnTextColor: {
    color: Colors.WHITE,
  },
  wrapperStyle: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: Colors.WHITE,
    width: '100%',
    height: '100%',
    marginTop: Metrics.verticalScale(30),
  },
  formStyle: {
    flex: 1,
    marginTop: Metrics.verticalScale(40),
    marginHorizontal: Metrics.scale(20),
  },
});
