import {StyleSheet} from 'react-native';
import Fonts from '@Theme/Fonts';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';

export default StyleSheet.create({
  flexOne: {flex: 1},
  root: {
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
  container: {
    marginHorizontal: 20,
    marginBottom: Metrics.doubleBaseMargin,
  },
  nameTxt: {
    ...Fonts.SemiBold(Fonts.Size.medium, Colors.BLACK),
    marginTop: Metrics.smallMargin,
  },
  wrapper: {marginBottom: Metrics.baseMargin},
  lectTxt: {marginHorizontal: 20, marginTop: Metrics.baseMargin},
});
