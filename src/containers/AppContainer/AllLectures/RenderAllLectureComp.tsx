import {lecturePng} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import H5 from '@Component/Headings/H5';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {navigate} from '@Service/navigationService';
import React from 'react';
import {Image, View} from 'react-native';
import TeacherName from '../Home/TeacherName';
import styles from './AllLectureStyles';

const RenderAllLectureComp = ({item}: any) => {
  const {blobFile, thumbnailUrl} = item?.lecture?.videoMedia || {};

  const {name, teachers} = item || {};
  return (
    <ButtonView
      onPress={() => {
        navigate(NavigationRoutes.APP_STACK.VIDEO_PLAYER, {
          blobFile,
          name,
          teachers,
        });
      }}
      style={styles.btnWrapper}>
      <View style={styles.row}>
        <Image
          source={thumbnailUrl ? {uri: thumbnailUrl} : lecturePng}
          style={styles.imgStyle}
        />
        <View style={styles.teacherWrapper}>
          <H5 text={name} />
          <TeacherName teachers={teachers} />
        </View>
      </View>
    </ButtonView>
  );
};

export default RenderAllLectureComp;
