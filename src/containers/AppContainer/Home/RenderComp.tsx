import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonView from '@Component/ButtonView';
import Metrics from '@Utility/Metrics';
import {Colors} from '@Theme/Colors';
import H5 from '@Component/Headings/H5';
import TeacherName from './TeacherName';
import {ClassSvg} from '@Asset/logo';
import {navigate} from '@Service/navigationService';
import NavigationRoutes from '@Navigator/NavigationRoutes';

const RenderComp = ({item}: any) => {
  const {teachers, id, name} = item || {};
  return (
    <ButtonView
      style={styles.btnStyle}
      onPress={() =>
        navigate(NavigationRoutes.APP_STACK.ZOOM, {
          id,
          zoomMeetingName: name,
        })
      }>
      <View style={styles.imgWrapper}>
        <ClassSvg />
      </View>
      {/* <Image
        source={{uri: item?.thumbnailMedia?.blobFileUrl}}
        style={styles.thumbnailStyle}
      /> */}

      <TeacherName teachers={teachers} />

      <View style={styles.titleStyle}>
        <H5 text={item?.name} />
      </View>
    </ButtonView>
  );
};

export default RenderComp;

const styles = StyleSheet.create({
  btnStyle: {
    // height: Metrics.verticalScale(370),
    width: Metrics.scale(220),
    backgroundColor: Colors.WHITE,
    marginHorizontal: 10,
    borderRadius: 20,
    // alignItems: 'center',
    paddingBottom: Metrics.baseMargin,
    paddingHorizontal: Metrics.scale(20),
  },
  thumbnailStyle: {
    width: Metrics.scale(250),
    height: Metrics.verticalScale(180),
  },
  titleStyle: {
    marginTop: Metrics.baseMargin,
  },
  imgWrapper: {justifyContent: 'center', alignSelf: 'center', marginTop: 20},
});
