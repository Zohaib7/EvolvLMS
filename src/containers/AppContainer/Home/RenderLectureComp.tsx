import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonView from '@Component/ButtonView';
import TeacherName from './TeacherName';
import Metrics from '@Utility/Metrics';
import {navigate} from '@Service/navigationService';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import H5 from '@Component/Headings/H5';
import {Colors} from '@Theme/Colors';
import {lecturePng} from '@Asset/logo';

const RenderLectureComp = ({item}: any) => {
  const {blobFile, thumbnailUrl} = item?.lecture?.videoMedia || {};

  const {name, teachers} = item || {};
  return (
    <ButtonView
      onPress={() =>
        navigate(NavigationRoutes.APP_STACK.VIDEO_PLAYER, {
          blobFile,
          name,
          teachers,
        })
      }
      style={styles.btnStyle}>
      <Image
        source={thumbnailUrl ? {uri: thumbnailUrl} : lecturePng}
        style={styles.thumbnailStyle}
      />
      <TeacherName teachers={teachers} />
      <View style={styles.titleStyle}>
        <H5 text={name} />
      </View>
    </ButtonView>
  );
};

export default RenderLectureComp;

const styles = StyleSheet.create({
  btnStyle: {
    width: Metrics.scale(310),
    backgroundColor: Colors.WHITE,
    marginHorizontal: 10,
    borderRadius: 20,
    paddingBottom: Metrics.baseMargin,
    paddingHorizontal: Metrics.scale(20),
  },
  thumbnailStyle: {
    width: Metrics.scale(250),
    height: Metrics.verticalScale(180),
  },
  titleStyle: {
    alignSelf: 'flex-start',
  },
});
