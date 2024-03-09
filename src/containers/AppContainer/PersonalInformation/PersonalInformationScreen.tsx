import React from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import {CameraSvg} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import AppButton from '@Component/Buttons/AppButton';
import FormHandler from '@Component/FormHandler';
import Input from '@Component/Input';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import useHomeScreenContainer from '../Home/HomeScreenContainer';
import usePersonalInformationContainer from './PersonalInformationContainer';
import SpinnerLoader from '@Component/SmallLoader';

const PersonalInformationScreen = () => {
  const {getAllUserDetails} = useHomeScreenContainer();
  const {onSubmitForm, refForm, UploadImage} =
    usePersonalInformationContainer();

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        contentContainerStyle={{height: Metrics.screenHeight}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            source={{uri: getAllUserDetails?.data?.profilePictureUrl}}
            style={styles.imgStyle}
          />
          <ButtonView onPress={() => UploadImage()} style={styles.btnStyle}>
            <CameraSvg />
          </ButtonView>
        </View>
        <View style={styles.formStyle}>
          <FormHandler ref={refForm} validateOnChange>
            {SCHEMAS => {
              return (
                <>
                  <View style={styles.inputWrapperWidth}>
                    <Input
                      {...SCHEMAS.text('name')}
                      value={getAllUserDetails?.data?.name}
                      label="Name"
                      placeholder="Name"
                      returnKeyType={'next'}
                    />
                  </View>

                  <View style={styles.inputWrapperWidth}>
                    <Input
                      {...SCHEMAS.email('email')}
                      value={getAllUserDetails?.data?.email}
                      label="Email"
                      placeholder="Email"
                      returnKeyType={'next'}
                    />
                  </View>
                  <View style={styles.inputWrapperWidth}>
                    <Input
                      {...SCHEMAS.phone('phoneNumber')}
                      value={getAllUserDetails?.data?.phoneNumber}
                      label="Phone Number"
                      placeholder="Phone"
                      returnKeyType={'next'}
                      keyboardType="phone-pad"
                    />
                  </View>
                  <View style={styles.inputWrapperWidth}>
                    <Input
                      {...SCHEMAS.text('city')}
                      value={getAllUserDetails?.data?.city}
                      label="City"
                      placeholder="City"
                      returnKeyType={'next'}
                    />
                  </View>
                  <View style={styles.inputWrapperWidth}>
                    <Input
                      {...SCHEMAS.text('address')}
                      value={getAllUserDetails?.data?.address}
                      label="Address"
                      placeholder="Address"
                      returnKeyType={'done'}
                    />
                  </View>
                </>
              );
            }}
          </FormHandler>
          <View style={styles.bottomWrapper}>
            <AppButton
              title={'Save Changes'}
              iconAfterText={true}
              onPress={() => onSubmitForm()}
              textStyle={styles.btnTextColor}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalInformationScreen;

const styles = StyleSheet.create({
  bottomWrapper: {
    marginTop: Metrics.verticalScale(30),
  },
  btnTextColor: {
    color: Colors.WHITE,
  },
  inputWrapperWidth: {width: '100%'},
  root: {flex: 1},
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    height: 120,
    width: 120,
    borderRadius: Metrics.scale(120),
    marginTop: Metrics.baseMargin,
    borderWidth: 2,
    borderColor: Colors.DARK_BORDER,
  },
  btnStyle: {position: 'absolute', bottom: 0, top: 85, right: 125},
  formStyle: {
    marginTop: Metrics.verticalScale(40),
    marginHorizontal: Metrics.scale(20),
  },
});
