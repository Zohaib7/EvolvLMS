import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import Fonts from '@Theme/Fonts';
import H4 from '@Component/Headings/H4';
import H7 from '@Component/Headings/H7';
import FlatListHandler from '@Component/FlatlistHandler';
import useLectureDetailContainer from './LectureDetailContainer';
import RenderLectureComp from './RenderLectureComp';
import styles from './LectureDetailStyles';
import CustomLottie from '@Component/EmptyCustomLottie/CustomLottie';

const LectureDetailScreen = ({route}) => {
  const {params} = route || {};
  const {id, cohortId, name} = params || {};

  const {contentData} = useLectureDetailContainer({id, cohortId});

  const renderItem = ({item}) => {
    return <RenderLectureComp item={item} />;
  };
  //TODO remove inline css
  return (
    <SafeAreaView style={styles.flexOne}>
      <View style={styles.root}>
        <View style={styles.container}>
          <H4 text={name} style={styles.nameTxt} />
        </View>
      </View>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <View style={styles.lectTxt}>
          <H7 text="Lectures" />

          <FlatListHandler
            data={contentData?.data}
            keyExtractor={item => item?.id}
            renderItem={renderItem}
            listEmptyText="No Data Found"
            emptyCustomComponent={
              <CustomLottie text="No Lectures At The Moment" />
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LectureDetailScreen;
