import {StyleSheet} from 'react-native';
import Fonts from '@Theme/Fonts';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginVertical: Metrics.smallMargin,
    paddingVertical: Metrics.verticalScale(25),
    paddingHorizontal: Metrics.scale(15),

    borderRadius: Metrics.scale(5),
    borderWidth: 1,
    borderColor: Colors.PROFILE_BORDER_COLOR,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.19,
    shadowRadius: 3.65,

    elevation: 1,
  },
  btnWrapper: {flexDirection: 'row', justifyContent: 'space-between'},
  text: {width: '90%'},
});
