import {StyleSheet} from 'react-native';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import Fonts from '@Theme/Fonts';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.baseMargin,
  },
  headTxt: {
    ...Fonts.SemiBold(Fonts.Size.medium, Colors.BLACK),
  },
  flex: {flex: 1},
  dateTxt: {
    color: Colors.DATE_COLOR,
    marginHorizontal: Metrics.smallMargin,
  },
  subContainer: {
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
  courseStyle: {
    ...Fonts.SemiBold(Fonts.Size.medium, Colors.BLACK),
    marginTop: Metrics.smallMargin,
  },
  subRoot: {
    marginHorizontal: 20,
    marginBottom: Metrics.doubleBaseMargin,
  },
  flatlistStyle: {
    marginHorizontal: 20,
    marginTop: Metrics.doubleBaseMargin,
    marginBottom: Metrics.doubleBaseMargin,
  },
  imageStyle: {marginHorizontal: -20},
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Center the content horizontally and vertically
    // width: '50%', // Adjust the width of the background image
    height: 110,
    paddingHorizontal: 45,
    alignSelf: 'flex-start',
  },
  text: {
    color: 'white',
    fontSize: 20, // Adjust the font size for the text
    lineHeight: 36, // Adjust the line height for the text
    fontWeight: 'bold',
    textAlign: 'center',
    // backgroundColor: '#000000c0',
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
  resText: {...Fonts.SemiBold(Fonts.Size.xxSmall, Colors.WHITE)},
  root: {
    borderRadius: Metrics.scale(25),
    borderWidth: 1,
    borderColor: Colors.PROFILE_BORDER_COLOR,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.baseMargin,
    marginVertical: Metrics.baseMargin,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    elevation: 3,
  },
  row: {flexDirection: 'row'},
  container: {width: '75%', marginTop: Metrics.verticalScale(20)},
});
