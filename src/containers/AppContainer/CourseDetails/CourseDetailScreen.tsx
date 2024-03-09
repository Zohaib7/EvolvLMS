import {
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';

import H2 from '@Component/Headings/H2';
import ButtonView from '@Component/ButtonView';
import {
  ChevSvg,
  MaterialSvg1,
  MaterialSvg2,
  MaterialSvg3,
  MaterialSvg4,
  avatar1,
} from '@Asset/logo';
import H7 from '@Component/Headings/H7';
import FlatListHandler from '@Component/FlatlistHandler';
import styles from './CourseDetailStyles';
import {navigate} from '@Service/navigationService';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import RenderMaterialComp from './RenderMaterialComp';
import {DATE_FORMATS, getFormatedDateTime} from '@Utility/DateUtils';
import Metrics from '@Utility/Metrics';

const CourseDetailScreen = ({route}) => {
  const {params} = route || {};

  const {cohortId, cohortName, teacherName, expiryDate} = params || {};

  const MaterialList = [
    // {
    //   id: 0,
    //   icon: <MaterialSvg1 />,
    //   label: 'Messages',
    //   optionalText: '1 Items',
    //   chevron: <ChevSvg />,
    // },
    {
      id: 1,
      icon: <MaterialSvg2 />,
      label: 'Lectures',
      optionalText: '5 Items',
      chevron: <ChevSvg />,
      action: () => {
        navigate(NavigationRoutes.APP_STACK.LECTURE, {cohortName, cohortId});
      },
    },
    {
      id: 2,
      icon: <MaterialSvg3 />,
      label: 'Classes',
      optionalText: '7 Items',
      chevron: <ChevSvg />,
      action: () => {
        navigate(NavigationRoutes.APP_STACK.CLASS);
      },
    },
    {
      id: 3,
      icon: <MaterialSvg4 />,
      label: 'Quiz Results',
      optionalText: '10 Items',
      chevron: <ChevSvg />,
      action: () => {
        navigate(NavigationRoutes.APP_STACK.QUIZ_RESULT, {cohortName});
      },
    },
    {
      id: 4,
      icon: <MaterialSvg4 />,
      label: 'Announcements',
      optionalText: '10 Items',
      chevron: <ChevSvg />,
      action: () => {
        navigate(NavigationRoutes.APP_STACK.MESSAGES);
      },
    },
  ];

  const renderItem = ({item}) => {
    return <RenderMaterialComp item={item} />;
  };

  const renderTeacherList = ({item}) => {
    return (
      <View style={styles.teacherCont}>
        <View style={styles.teacherWrapper}>
          <Image source={avatar1} />
          <H7 text={item?.name} style={styles.teacherTxt} />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <H2 text={cohortName} style={styles.cohortStyle} />
          <View style={styles.btnContainer}>
            {/* <ButtonView style={styles.btnWrapper}>
              <H7 text="24 Lectures" style={styles.lectureTxt} />
            </ButtonView> */}
            {/* TODO there should be a date util from all the dates function will be used */}
            <H7
              style={styles.dateTxt}
              text={`Expiry Date: ${getFormatedDateTime(
                expiryDate,
                DATE_FORMATS.DATE_FORMAT,
              )}`}
            />
          </View>

          <View style={styles.separator} />
          <View>
            <H7 text="Teachers" style={styles.teacherHead} />
            <View style={styles.top}>
              <FlatList
                data={teacherName}
                renderItem={renderTeacherList}
                numColumns={2}
              />
            </View>
          </View>

          <View style={styles.separator} />

          <H7 text="COURSE MATERIALS" style={styles.verticalStyle} />
          {/* TODO why you have use view here its not necessary to use view here */}
          <FlatListHandler
            data={MaterialList}
            keyExtractor={item => item?.id}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CourseDetailScreen;

//Todo remove styles from here and make a file and import it here
