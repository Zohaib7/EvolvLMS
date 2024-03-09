import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonView from '@Component/ButtonView';
import {navigate} from '@Service/navigationService';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import Metrics from '@Utility/Metrics';
import {Colors} from '@Theme/Colors';
import H5 from '@Component/Headings/H5';
import TeacherName from '../Home/TeacherName';

const RenderCourseComp = ({item}: any) => {
  const {cohortId, formattedName, teachers, expiryDate} = item || {};

  return (
    <ButtonView
      onPress={() => {
        navigate(NavigationRoutes.APP_STACK.COURSE_DETAIL, {
          cohortId: cohortId,
          cohortName: formattedName,
          teacherName: teachers,
          expiryDate: expiryDate,
        });
      }}
      style={styles.btnWrapper}>
      <View style={styles.row}>
        <Image
          source={{uri: item?.thumbnailMedia?.blobFileUrl}}
          style={styles.imgStyle}
        />
        <View style={styles.teacherWrapper}>
          <H5 text={formattedName} />
          <TeacherName teachers={teachers} />
        </View>
      </View>
    </ButtonView>
  );
};

export default RenderCourseComp;
//Todo remove styles from here and make a file and import it here
const styles = StyleSheet.create({
  btnWrapper: {
    paddingVertical: Metrics.verticalScale(10),
    backgroundColor: Colors.WHITE,
    marginVertical: Metrics.smallMargin,
    paddingHorizontal: Metrics.scale(10),
    borderWidth: 1,
    borderRadius: Metrics.scale(16),
    borderColor: Colors.COURSE_BORDER_COLOR,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.19,
    shadowRadius: 3.65,

    elevation: 3,
  },
  row: {flexDirection: 'row'},
  imgStyle: {
    width: Metrics.scale(100),
    height: Metrics.verticalScale(100),
  },
  teacherWrapper: {
    marginTop: Metrics.smallMargin,
    paddingHorizontal: Metrics.baseMargin,
    width: '65%',
  },
});
