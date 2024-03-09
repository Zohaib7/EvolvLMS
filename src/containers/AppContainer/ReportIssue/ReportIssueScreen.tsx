import {ScreenshotCamera} from '@Asset/logo';
import AppButton from '@Component/Buttons/AppButton';
import FormHandler from '@Component/FormHandler';
import Input from '@Component/Input';
import React from 'react';
import {ScrollView, View} from 'react-native';
import useReportIssueContainer from './ReportIssueContainer';
import {styles} from './ReportIssueStyles';

const ReportIssueScreen = () => {
  const {onSubmitForm, refForm, UploadImage} = useReportIssueContainer();
  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <FormHandler ref={refForm} validateOnChange>
        {SCHEMAS => {
          return (
            <>
              <View style={styles.inputWrapperWidth}>
                <Input
                  {...SCHEMAS.text('name')}
                  label="Subject"
                  placeholder="Title of Subject"
                  returnKeyType={'next'}
                />
              </View>
              <View style={styles.inputWrapperWidth}>
                <Input
                  {...SCHEMAS.message('description')}
                  label="Describe your problem Briefly"
                  placeholder="Your Issue"
                  returnKeyType={'done'}
                  multiline={true}
                  style={styles.input}
                />
              </View>
            </>
          );
        }}
      </FormHandler>

      <View style={styles.container}>
        <AppButton
          imageSource={ScreenshotCamera}
          onPress={() => UploadImage()}
          title={'Upload Screenshot'}
          textStyle={styles.btnTextColor}
          style={styles.btnWrapper}
        />
      </View>
      <View style={styles.bottomWrapper}>
        <AppButton
          title={'Save Changes'}
          iconAfterText={true}
          textStyle={styles.btnTextColors}
          onPress={() => onSubmitForm()}
        />
      </View>
    </ScrollView>
  );
};

export default ReportIssueScreen;
