import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonView from '@Component/ButtonView';
import Metrics from '@Utility/Metrics';
import {Colors} from '@Theme/Colors';
import H4 from '@Component/Headings/H4';
import H7 from '@Component/Headings/H7';
import Fonts from '@Theme/Fonts';

const RenderMaterialComp = ({item}: any) => {
  return (
    <ButtonView onPress={item?.action} style={styles.btnWrapper}>
      <View
        style={{
          alignSelf: 'center',
        }}>
        {item?.icon}
      </View>
      <View style={styles.container}>
        <H4
          text={item?.label}
          style={[
            styles.text,
            {
              color: item.isColor ? item.isColor : Colors.BLACK,
            },
          ]}
        />
        {/* <H7 text={item?.optionalText} style={styles.optionalTxt} /> */}
      </View>
      <View style={styles.centerStyle}>{item?.chevron}</View>
    </ButtonView>
  );
};

export default RenderMaterialComp;
//Todo remove styles from here and make a file and import it here
const styles = StyleSheet.create({
  text: {
    ...Fonts.Medium(Fonts.Size.small),
  },
  bottomLine: {
    width: '100%',
    height: 1,
    position: 'absolute',
    backgroundColor: Colors.PLACEHOLDER_COLOR,
    bottom: 0,
    marginRight: 'auto',
  },
  btnWrapper: {
    flexDirection: 'row',
    marginVertical: Metrics.smallMargin,
    paddingVertical: Metrics.verticalScale(20),
    backgroundColor: Colors.WHITE,
    borderRadius: Metrics.scale(13),
    borderWidth: 1,
    borderColor: Colors.PROFILE_BORDER_COLOR,
    paddingHorizontal: Metrics.smallMargin,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.19,
    shadowRadius: 3.65,

    elevation: 1,
  },
  container: {
    flexDirection: 'column',
    marginHorizontal: Metrics.doubleBaseMargin,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '65%',
  },
  optionalTxt: {...Fonts.Light(Fonts.Size.xxxSmall, Colors.SECONDARY)},
  centerStyle: {
    alignSelf: 'center',
  },
});
