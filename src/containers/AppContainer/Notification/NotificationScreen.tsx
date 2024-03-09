// NotificationScreen.js
import FlatListHandler from '@Component/FlatlistHandler';
import H5 from '@Component/Headings/H5';
import H7 from '@Component/Headings/H7';
import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import useNotificationContainer from './NotificationContainer';
import {styles} from './NotificationSyles';
import {DATE_FORMATS, getFormatedDateTime} from '@Utility/DateUtils';
import CustomLottie from '@Component/EmptyCustomLottie/CustomLottie';

const NotificationScreen = () => {
  const {allNotificationData} = useNotificationContainer();
  const renderItem = ({item}: any) => {
    const {profilePicture, dateTime} = item?.createdBy || {};
    return (
      <View
        style={
          item?.isRead
            ? styles.notificationContainer
            : styles.unreadNotificationContainer
        }>
        {/* <View>{item?.img}</View> */}
        <View style={styles.imageWrapper}>
          <Image
            source={{
              uri: 'https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png',
            }}
          />
        </View>
        <View style={styles.notificationDetails}>
          <View style={styles.notificationHeader}>
            <H5 text={item?.name} />
            <View style={styles.notificationTime}>
              <View style={styles.dotIndicator} />
              <H7
                text={getFormatedDateTime(dateTime, DATE_FORMATS.DATE_FORMAT)}
                style={styles.timeText}
              />
            </View>
          </View>
          <View>
            <H7 text={item?.message} style={styles.descriptionText} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatListHandler
        data={allNotificationData?.data}
        keyExtractor={item => item?.id}
        renderItem={renderItem}
        contentContainerStyle={{marginHorizontal: 20}}
        listEmptyText="No Data Found"
        emptyCustomComponent={
          <CustomLottie text="No Notifications At The Moment" />
        }
      />
    </SafeAreaView>
  );
};

export default NotificationScreen;
