import {AppLogo, LogoSvg} from '@Asset/logo';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface IAuthWrapper {
  wrapperStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

export default function AuthWrapper({wrapperStyle, children}: IAuthWrapper) {
  return (
    <LinearGradient
      colors={['#4A9B5A', '#034D11']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.gradientContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{minHeight: '100%'}}
        alwaysBounceVertical={false}
        bounces={false}>
        <SafeAreaView style={styles.container}>
          <View style={styles.root}>
            <AppLogo />

            <View style={wrapperStyle}>{children}</View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Metrics.verticalScale(140),
    flex: 1,
  },
  gradientContainer: {
    height: '100%',
  },
  root: {
    marginTop: Metrics.verticalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
