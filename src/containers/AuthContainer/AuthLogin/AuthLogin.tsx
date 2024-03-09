import {RightArrowLarge} from '@Asset/logo';
import AuthDefaultHeading from '@Component/AuthDefaultHeading/AuthDefaultHeading';
import AuthWrapper from '@Component/AuthWrapper/AuthWrapper';
import AppButton from '@Component/Buttons/AppButton';
import FormHandler from '@Component/FormHandler';
import Input from '@Component/Input';
import React from 'react';
import {View} from 'react-native';
import useAuthLoginContainer from './AuthLoginContainer';
import styles from './AuthLoginStyles';
const AuthLogin = () => {
  const {refForm, onSubmitForm} = useAuthLoginContainer();
  return (
    <View>
      <AuthWrapper wrapperStyle={styles.wrapperStyle}>
        <AuthDefaultHeading
          title="Login
To Your Account"
        />
        <View style={styles.formStyle}>
          <FormHandler ref={refForm} validateOnChange>
            {SCHEMAS => {
              return (
                <>
                  <View style={styles.inputWrapperWidth}>
                    <Input
                      {...SCHEMAS.email('Email')}
                      placeholder="Email ID"
                      returnKeyType={'next'}
                    />
                  </View>
                  <View style={styles.inputWrapperWidth}>
                    <Input
                      {...SCHEMAS.password('Password')}
                      placeholder="Password"
                      returnKeyType={'done'}
                      secureTextEntry={false}
                    />
                  </View>
                </>
              );
            }}
          </FormHandler>
          <View style={styles.bottomWrapper}>
            <AppButton
              title={'Login'}
              imageSource={RightArrowLarge}
              iconAfterText={true}
              onPress={() => onSubmitForm()}
              textStyle={styles.btnTextColor}
            />
          </View>
        </View>
      </AuthWrapper>
    </View>
  );
};

export default AuthLogin;

//TODO remove big style from here and import from another file
