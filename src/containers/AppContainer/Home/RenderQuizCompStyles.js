// RenderQuizCompStyles.js

import {StyleSheet} from 'react-native';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';

export default StyleSheet.create({
  selectedStyle: {
    zIndex: 9,
    ...Fonts.Medium(Fonts.Size.xSmall, Colors.WHITE),
  },
  unselectedStyle: {
    zIndex: 9,
    ...Fonts.Medium(Fonts.Size.xSmall, Colors.UNSELECTED_COLOR),
  },
  radioBg: {
    backgroundColor: Colors.GREEN,
    position: 'absolute',
    width: Metrics.scale(110),
    height: Metrics.verticalScale(60),
    borderRadius: Metrics.scale(20),
  },
  resultWrapper: {
    paddingVertical: Metrics.verticalScale(10),
    paddingHorizontal: Metrics.scale(35),
    borderRadius: Metrics.scale(30),
  },
  failBg: {
    backgroundColor: Colors.ERROR_RED,
  },
  passBg: {
    backgroundColor: Colors.APP_GREEN,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 110,
    paddingHorizontal: 45,
    alignSelf: 'flex-start',
  },
  text: {
    color: 'white',
    fontSize: 20,
    lineHeight: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnStyle: {
    width: Metrics.scale(260),
    backgroundColor: Colors.WHITE,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  txt: {
    ...Fonts.SemiBold(Fonts.Size.small, Colors.BLACK),
  },
  wrapper: {
    flexDirection: 'row',
    marginTop: Metrics.verticalScale(20),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Metrics.baseMargin,
  },
  resultWrap: {
    marginTop: Metrics.baseMargin,
    marginHorizontal: 20,
  },
  resText: {
    ...Fonts.SemiBold(Fonts.Size.xxSmall, Colors.WHITE),
  },
  dateTxt: {
    ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.DATE_LIGHT_COLOR),
  },
});
