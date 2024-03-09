import {BellSmall} from '@Asset/logo';
import FlatListHandler from '@Component/FlatlistHandler';
import React from 'react';
import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import useHomeScreenContainer from '../Home/HomeScreenContainer';
import styles from './CourseScreenStyles';
import CourseSkeleton from './CourseSkeleton';
import RenderCourseComp from './RenderCourseComp';
import useCourseContainer from '../Home/CourseContainer';
import ButtonView from '@Component/ButtonView';
import {navigate} from '@Service/navigationService';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import CustomLottie from '@Component/EmptyCustomLottie/CustomLottie';
//TODO remove un used imports
const CourseScreen = () => {
  const {coursesData, courseLoading} = useCourseContainer();
  const {getAllUserDetails} = useHomeScreenContainer();

  const renderItem = ({item}: any) => {
    return <RenderCourseComp item={item} />;
  };
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.headerWrapper}>
            <Image
              source={{uri: getAllUserDetails?.data?.profilePictureUrl}}
              style={styles.imgStyle}
            />
            <ButtonView
              onPress={() => navigate(NavigationRoutes.APP_STACK.NOTIFICATION)}>
              <BellSmall style={styles.iconStyle} />
            </ButtonView>
          </View>

          {courseLoading ? (
            <CourseSkeleton />
          ) : (
            <View style={styles.flatlistStyle}>
              <FlatListHandler
                data={coursesData?.data}
                renderItem={renderItem}
                keyExtractor={item => item?.id}
                listEmptyText="No Data Found"
                emptyCustomComponent={
                  <CustomLottie text="No Courses At The Moment" />
                }
              />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CourseScreen;
//Todo remove styles from here and make a file and import it here
