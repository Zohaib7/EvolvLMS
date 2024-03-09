import FlatListHandler from '@Component/FlatlistHandler';
import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import CourseSkeleton from '../Courses/CourseSkeleton';
import useLecturesContainer from '../Home/LectureContainer';
import styles from './AllLectureStyles';
import RenderAllLectureComp from './RenderAllLectureComp';
import CustomLottie from '@Component/EmptyCustomLottie/CustomLottie';

const AllLecturesScreen = () => {
  const {lecturesData, isLoading} = useLecturesContainer();
  const renderItem = ({item}: any) => {
    return <RenderAllLectureComp item={item} />;
  };
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {isLoading ? (
            <CourseSkeleton />
          ) : (
            <View style={styles.flatlistStyle}>
              <FlatListHandler
                data={lecturesData?.data}
                renderItem={renderItem}
                keyExtractor={item => item?.id}
                listEmptyText="No Data Found"
                emptyCustomComponent={
                  <CustomLottie text="No Lectures At The Moment" />
                }
              />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllLecturesScreen;
