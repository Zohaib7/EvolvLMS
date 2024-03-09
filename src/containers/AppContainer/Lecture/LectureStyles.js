import {StyleSheet} from 'react-native';
import Fonts from '@Theme/Fonts';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';

export default StyleSheet.create({
  root: {flex: 1},
  container: {
    backgroundColor: Colors.WHITE,
    borderBottomLeftRadius: Metrics.scale(25),
    borderBottomRightRadius: Metrics.scale(25),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.19,
    shadowRadius: 3.65,

    elevation: 0.5,
  },
  wrapper: {
    marginHorizontal: 20,
    marginBottom: Metrics.doubleBaseMargin,
  },
  innerWrap: {
    ...Fonts.SemiBold(Fonts.Size.medium, Colors.BLACK),
    marginTop: Metrics.smallMargin,
  },
  btnCont: {marginTop: Metrics.baseMargin},
  btnWrapper: {
    paddingVertical: Metrics.verticalScale(16),
    backgroundColor: Colors.APP_GREEN,
    width: '25%',
    borderRadius: Metrics.scale(10),
    marginTop: Metrics.baseMargin,
    alignItems: 'center',
  },
  lecTxt: {
    ...Fonts.SemiBold(Fonts.Size.xxxxSmall, Colors.WHITE),
  },
  chapTxt: {
    marginHorizontal: 20,
    marginTop: Metrics.doubleBaseMargin,
    marginBottom: Metrics.doubleBaseMargin,
  },
});
