import {StyleSheet} from 'react-native';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import Fonts from '@Theme/Fonts';

export const styles = StyleSheet.create({
  inputWrapperWidth: {width: '100%'},
  input: {
    borderWidth: 1,
    borderColor: Colors.GREEN,
    borderRadius: 10,
    padding: Metrics.baseMargin,
    // paddingRight: Metrics.scale(50),
    height: 215,
    textAlignVertical: 'top',
    overflow: 'scroll',
    marginTop: Metrics.baseMargin,
  },
  btnTextColor: {
    ...Fonts.Regular(Fonts.Size.xSmall, Colors.GREEN),
    marginBottom: 2,
  },
  btnTextColors: {
    color: 'white',
  },
  bottomWrapper: {
    marginTop: Metrics.verticalScale(100),
  },
  container: {
    marginTop: Metrics.verticalScale(50),
    marginBottom: Metrics.verticalScale(50),
  },
  btnWrapper: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.GREEN,
    borderWidth: 1,
    shadowColor: Colors.BLACK,

    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 0.4,
  },
  root: {marginHorizontal: 20},
});
