import {BellSmall} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import H2 from '@Component/Headings/H2';

import H7 from '@Component/Headings/H7';

import NavigationRoutes from '@Navigator/NavigationRoutes';
import {navigate} from '@Service/navigationService';
import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useHomeScreenContainer from './HomeScreenContainer';
import HomeScreenFlatlist from './HomeScreenFlatlist';
import HomeScreenSkeleton from './HomeScreenSkeleton';
import styles from './HomeScreenStyles';
import RenderComp from './RenderComp';
import RenderCoursesComp from './RenderCoursesComp';
import RenderLectureComp from './RenderLectureComp';
import RenderQuizComp from './RenderQuizComp';
import useCourseContainer from './CourseContainer';
import useClassContainer from './ClassContainer';
import useLecturesContainer from './LectureContainer';
import useQuizContainer from './QuizContainer';
import {getItem} from '@Service/storageService';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import {getDeviceId} from '@Utility/common';
import TextSkeleton from '@Component/SkeletonComponents/TextSkeleton';

const HomeScreen = () => {
  const {getAllUserDetails, userLoading} = useHomeScreenContainer();
  const {coursesData} = useCourseContainer();
  const {classeData, isLoading} = useClassContainer();
  const {lecturesData} = useLecturesContainer();
  const {quizesData} = useQuizContainer();

  const {data} = quizesData || {};

  const renderQuiz = item => {
    return <RenderQuizComp item={item} />;
  };

  const renderClasses = ({item}: any) => {
    return <RenderComp item={item} />;
  };

  const renderLectures = ({item}: any) => {
    return <RenderLectureComp item={item} />;
  };

  const renderCourses = ({item}: any) => {
    return <RenderCoursesComp item={item} />;
  };

  const HeaderComp = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{uri: getAllUserDetails?.data?.profilePicture}}
            style={styles.imgStyle}
          />
          <ButtonView
            onPress={() => navigate(NavigationRoutes.APP_STACK.NOTIFICATION)}>
            <BellSmall style={styles.bellStyle} />
          </ButtonView>
        </View>
        <View style={styles.greetingStyle}>
          {getAllUserDetails?.data?.name === null ? (
            <></>
          ) : (
            <H2
              text={`Welcome, \n${getAllUserDetails?.data?.name}`}
              style={styles.nameStyle}
            />
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <HeaderComp />
      <ScrollView showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <HomeScreenSkeleton />
        ) : (
          <>
            <View style={styles.classContainer}>
              <H2 text="Live Classes" style={styles.classTxtStyle} />
              <ButtonView
                onPress={() => navigate(NavigationRoutes.APP_STACK.CLASS)}>
                <H7 text="See All" style={styles.seeAllTxtStyle} />
              </ButtonView>
            </View>

            <HomeScreenFlatlist
              data={classeData?.data}
              renderItem={renderClasses}
            />

            <View style={styles.lectureWrapper}>
              <H2 text="Lectures" style={styles.lectureTxt} />
              <ButtonView
                onPress={() =>
                  navigate(NavigationRoutes.APP_STACK.ALL_LECTURES)
                }>
                <H7 text="See All" style={styles.seeAllTxtStyle} />
              </ButtonView>
            </View>

            <HomeScreenFlatlist
              data={lecturesData?.data}
              renderItem={renderLectures}
            />
            <View style={styles.quizWrapper}>
              <H2 text="Quiz Results" style={styles.quizTxt} />
              <ButtonView
                onPress={() =>
                  navigate(NavigationRoutes.APP_STACK.QUIZ_RESULT)
                }>
                <H7 text="See All" style={styles.seeAllTxtStyle} />
              </ButtonView>
            </View>

            <HomeScreenFlatlist data={data} renderItem={renderQuiz} />
            <View style={styles.courseWrapper}>
              <H2 text="My Courses" style={styles.courseTxt} />
              <ButtonView
                onPress={() => navigate(NavigationRoutes.APP_STACK.COURSES)}>
                <H7 text="See All" style={styles.seeAllTxtStyle} />
              </ButtonView>
            </View>

            <HomeScreenFlatlist
              data={coursesData?.data}
              renderItem={renderCourses}
            />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
//Todo remove styles from here and make a file and import it here
