import {avatar1} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import FlatListHandler from '@Component/FlatlistHandler';
import H4 from '@Component/Headings/H4';
import H7 from '@Component/Headings/H7';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import ChapComp from './ChapComp';
import useLectureContainer from './LectureContainer';
import styles from './LectureStyles';
import CustomLottie from '@Component/EmptyCustomLottie/CustomLottie';

const LecctureScreen = ({route}) => {
  const {params} = route || {};
  const {cohortName, cohortId} = params || {};
  const {chapterData, mutateReadStatus} = useLectureContainer(cohortId);

  const renderItem = ({item}) => {
    return <ChapComp item={item || {}} mutateReadStatus={mutateReadStatus} />;
  };
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <H4 text={cohortName} style={styles.innerWrap} />
          <View style={styles.btnCont}>
            {/* <ButtonView style={styles.btnWrapper}>
              <H7 text="24 Lectures" style={styles.lecTxt} />
            </ButtonView> */}
            <Image source={avatar1} />
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.chapTxt}>
          <H7 text="Chapters" />
          <FlatListHandler
            data={chapterData?.data}
            keyExtractor={item => item?.id}
            renderItem={renderItem}
            listEmptyText="No Data Found"
            emptyCustomComponent={
              <CustomLottie text="No Chapters At The Moment" />
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LecctureScreen;
//Todo remove styles from here and make a file and import it here
