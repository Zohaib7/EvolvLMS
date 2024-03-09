import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonView from '@Component/ButtonView';
import Metrics from '@Utility/Metrics';
import {Colors} from '@Theme/Colors';
import TeacherName from './TeacherName';
import H5 from '@Component/Headings/H5';
import {navigate} from '@Service/navigationService';
import NavigationRoutes from '@Navigator/NavigationRoutes';

const RenderCoursesComp = ({item}: any) => {
  const {teachers, cohortId, formattedName, expiryDate} = item || {};
  return (
    <ButtonView
      onPress={() => {
        navigate(NavigationRoutes.APP_STACK.COURSE_DETAIL, {
          cohortId: cohortId,
          cohortName: formattedName,
          teacherName: teachers,
          expiryDate,
        });
      }}
      style={{
        width: Metrics.scale(310),
        backgroundColor: Colors.WHITE,
        marginHorizontal: 10,
        borderRadius: 20,
        paddingBottom: Metrics.baseMargin,
        paddingHorizontal: Metrics.scale(20),
      }}>
      <Image
        source={{uri: item?.thumbnailMedia?.blobFileUrl}}
        style={{
          width: Metrics.scale(250),
          height: Metrics.verticalScale(180),
          marginTop: Metrics.verticalScale(20),
        }}
      />

      <TeacherName teachers={teachers} />
      <View>
        <H5 text={item?.formattedName} />
      </View>
    </ButtonView>
  );
};

export default RenderCoursesComp;

const styles = StyleSheet.create({});
