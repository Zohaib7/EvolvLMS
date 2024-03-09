import {StyleSheet} from 'react-native';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';

export default styles = StyleSheet.create({
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
    marginTop: Metrics.verticalScale(20),
    marginHorizontal: 20,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Metrics.baseMargin,
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
  btnWrapper: {
    paddingVertical: Metrics.verticalScale(10),
    backgroundColor: Colors.WHITE,
    marginVertical: Metrics.smallMargin,
    paddingHorizontal: Metrics.scale(10),
    borderWidth: 1,
    borderRadius: Metrics.scale(16),
    borderColor: Colors.COURSE_BORDER_COLOR,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.19,
    shadowRadius: 3.65,

    elevation: 3,
  },
  row: {flexDirection: 'row'},
  imgStyle: {
    width: Metrics.scale(100),
    height: Metrics.verticalScale(100),
  },
  teacherWrapper: {
    marginTop: Metrics.smallMargin,
    paddingHorizontal: Metrics.baseMargin,
    width: '65%',
  },
});
