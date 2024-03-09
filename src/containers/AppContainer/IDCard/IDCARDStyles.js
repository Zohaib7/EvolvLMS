import {StyleSheet} from 'react-native';
import Fonts from '@Theme/Fonts';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';

export default StyleSheet.create({
  closeBtn: {
    padding: 10,
    marginTop: Metrics.verticalScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Metrics.scale(32),
    borderWidth: 1,
    borderColor: Colors.APP_GREEN,
    paddingVertical: Metrics.baseMargin,
    alignContent: 'center',
    alignSelf: 'center',
  },
  imgStyle: {
    paddingVertical: Metrics.verticalScale(72),
    width: Metrics.scale(160),
    borderRadius: 150,
    borderWidth: 10,
    borderColor: Colors.WHITE,
    backgroundColor: Colors.WHITE,
    position: 'absolute',
    bottom: 0,
    top: 70,
    alignSelf: 'flex-end',
    right: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  root: {
    paddingVertical: Metrics.verticalScale(100),
    backgroundColor: Colors.GREEN,
  },
  containerImg: {
    paddingVertical: Metrics.verticalScale(80),
    width: Metrics.scale(150),
    borderRadius: 80,
    position: 'absolute',
  },
  container: {
    marginTop: Metrics.verticalScale(60),
    width: '70%',
    marginHorizontal: 20,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: Metrics.verticalScale(50),
  },
  idStyle: {alignSelf: 'center', color: Colors.LIGHT_TEXT},
  dataStyle: {
    alignSelf: 'center',
    marginTop: Metrics.smallMargin,
    ...Fonts.Medium(Fonts.Size.normal, Colors.CARD_DESC_TEXT),
  },
  expTxt: {alignSelf: 'center', color: Colors.LIGHT_TEXT},
  dateTxt: {
    alignSelf: 'center',
    marginTop: Metrics.smallMargin,
    ...Fonts.Medium(Fonts.Size.normal, Colors.CARD_DESC_TEXT),
  },
  barcodeStyle: {alignSelf: 'center', marginTop: Metrics.verticalScale(70)},
  centerStyle: {alignSelf: 'center', marginTop: Metrics.smallMargin},
  closeTxt: {
    ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.APP_GREEN),
    marginHorizontal: Metrics.scale(8),
  },
  formattedTxt: {
    ...Fonts.Regular(Fonts.Size.normal, Colors.CARD_DESC_TEXT),
    lineHeight: 36,
  },
  nameStyle: {
    ...Fonts.Bold(Fonts.Size.xLarge, Colors.CARD_TEXT),
    marginTop: Metrics.baseMargin,
  },
});
