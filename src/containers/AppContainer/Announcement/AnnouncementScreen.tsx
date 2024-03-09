import {AnnouncementSvg, InnerIcon, Person1, avatar1} from '@Asset/logo';
import FlatListHandler from '@Component/FlatlistHandler';
import H5 from '@Component/Headings/H5';
import H7 from '@Component/Headings/H7';
import {AnnouncementList} from '@Constants/dummyData';
import {Colors} from '@Theme/Colors';
import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import styles from './AnnouncementStyles';
import useAnnouncementContainer from './AnnouncementContainer';
import {DATE_FORMATS, getFormatedDateTime} from '@Utility/DateUtils';
import CustomLottie from '@Component/EmptyCustomLottie/CustomLottie';

//TODO remove inline css
const Announcement = ({route}) => {
  const {params} = route || {};
  const {id, name} = params || {};

  const {chatData} = useAnnouncementContainer(id);

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <H5 text={item?.name} />
            <InnerIcon />
          </View>

          <View style={styles.mainTxt}>
            <H7 style={styles.msgTxt} text={item?.message} />
          </View>
        </View>
        <View style={styles.imgStyle}>
          <Person1 />
        </View>

        <H7
          style={styles.dateTxt}
          text={getFormatedDateTime(
            item?.createdBy?.dateTime,
            DATE_FORMATS.DATE_FORMAT,
          )}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.flexOne}>
      <View style={styles.announcementCont}>
        <View style={styles.row}>
          <View>
            <AnnouncementSvg />
          </View>
          <View style={styles.courseTxt}>
            <H5 text={name} style={{color: Colors.PROFILE_TEXT_COLOR}} />
            <View style={styles.avaImg}>
              <Image source={avatar1} />
              {/* <H7 text="24 Lectures" style={styles.lectTxt} /> */}
            </View>
          </View>
        </View>
      </View>
      {/* why scrollview and FlatlistHandleris use here? Scrollview should be removed here*/}
      <FlatListHandler
        data={chatData?.data}
        keyExtractor={item => item?.id}
        renderItem={renderItem}
        listEmptyText="No Data Found"
        emptyCustomComponent={
          <CustomLottie text="No Announcements At The Moment" />
        }
      />
    </SafeAreaView>
  );
};

export default Announcement;
