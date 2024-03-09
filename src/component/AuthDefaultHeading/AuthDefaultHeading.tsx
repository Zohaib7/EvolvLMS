import H1 from '@Component/Headings/H1';
import H4 from '@Component/Headings/H4';
import H7 from '@Component/Headings/H7';

import {Colors, Fonts} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface IAuthDefaultHeading {
  title?: string;
  desc?: string;
  isOtp?: boolean;
}

const AuthDefaultHeading = ({
  title,
  desc,
  isOtp = false,
}: IAuthDefaultHeading) => {
  return (
    <View style={styles.root}>
      <H1 style={styles.textCenter} text={title} />
      {desc && (
        <H4
          style={[styles.desc, isOtp ? {width: Metrics.scale(180)} : null]}
          text={desc}
        />
      )}
    </View>
  );
};

export default AuthDefaultHeading;

const styles = StyleSheet.create({
  root: {
    marginTop: Metrics.verticalScale(50),
    marginHorizontal: Metrics.scale(20),
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    // alignSelf: 'center',
  },
  textCenter: {
    // textAlign: 'center',
    // marginBottom: Metrics.verticalScale(20),
    ...Fonts.Bold(Fonts.Size.xLarge, Colors.Colors.GREEN),
    // marginHorizontal: 20,
  },
  desc: {
    textAlign: 'center',
    color: Colors.Colors.GREY,
    ...Fonts.Medium(Fonts.Size.medium, Colors.Colors.DARK_BLACK),
  },
});
