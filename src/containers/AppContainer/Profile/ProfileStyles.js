import {StyleSheet} from 'react-native';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import Fonts from '@Theme/Fonts';

export const styles = StyleSheet.create({
  bottomLine: {
    width: '100%',
    height: 1,
    position: 'absolute',
    backgroundColor: Colors.PLACEHOLDER_COLOR,
    bottom: 0,
    marginRight: 'auto',
  },
  text: {
    ...Fonts.Medium(Fonts.Size.normal, Colors.PROFILE_TEXT_COLOR),
    marginHorizontal: Metrics.smallMargin,
    alignSelf: 'center',
  },
  container: {
    borderBottomLeftRadius: Metrics.scale(35),
    borderBottomRightRadius: Metrics.scale(35),
  },
  root: {
    marginHorizontal: 20,
    marginTop: Metrics.verticalScale(45),
    ...Fonts.Bold(Fonts.Size.xLarge, Colors.WHITE),
  },
  headerStyle: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {height: 100, width: 100, borderRadius: Metrics.scale(100)},
  nameStyle: {...Fonts.Medium(Fonts.Size.xLarge, Colors.WHITE)},
  cardStyle: {
    color: Colors.WHITE,
    marginTop: Metrics.smallMargin,
    marginBottom: Metrics.baseMargin,
  },
  btnWrapper: {
    flexDirection: 'row',
    marginVertical: Metrics.smallMargin,
    paddingVertical: Metrics.baseMargin,
    width: '100%',
    backgroundColor: Colors.WHITE,
    borderRadius: Metrics.scale(12),
    borderWidth: 1,
    borderColor: Colors.PROFILE_BORDER_COLOR,
  },
  iconStyle: {
    alignSelf: 'center',
    marginHorizontal: Metrics.scale(10),
  },
  compStyle: {
    marginHorizontal: 20,
    marginBottom: Metrics.baseMargin,
    marginTop: Metrics.baseMargin,
  },
  top: {marginTop: Metrics.baseMargin},
  sub: {
    ...Fonts.Bold(Fonts.Size.large, Colors.BLACK),
  },
  supTxt: {...Fonts.Bold(Fonts.Size.large, Colors.BLACK)},
  logoutWrapper: {
    flexDirection: 'row',
    marginHorizontal: Metrics.baseMargin,
    marginVertical: Metrics.baseMargin,
  },
  logoutTxtStyle: {
    ...Fonts.SemiBold(Fonts.Size.medium, Colors.LOGOUT_COLOR),
    marginHorizontal: Metrics.baseMargin,
  },
});
