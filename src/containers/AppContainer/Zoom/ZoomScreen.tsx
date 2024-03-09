import AppButton from '@Component/Buttons/AppButton';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import useClassContainer from '../Home/ClassContainer';
import {getItem} from '@Service/storageService';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import ZoomService from '@Service/zoom.service';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import Fonts from '@Theme/Fonts';
import H5 from '@Component/Headings/H5';
import {AnnouncementSvg, avatar1} from '@Asset/logo';
import H6 from '@Component/Headings/H6';
import H4 from '@Component/Headings/H4';

const ZoomScreen = ({route}) => {
  const {params} = route || {};
  const {id, zoomMeetingName} = params || {};
  const {meetingData} = useClassContainer(id);
  // const {id: meetingNumber, password} = meetingData?.data?.zoomMeeting || {};

  const user = getItem(STORAGE_KEYS.GET_USER);

  const {name} = user?.data || {};
  let password = '1nf8JH';
  let meetingNumber = '72109238908';

  const handleJoinMeeting = () =>
    ZoomService.joinZoomMeeting(
      meetingNumber,
      name,
      (autoConnectAudio = true),
      password,
    );

  return (
    <View style={styles.root}>
      <View style={styles.announcementCont}>
        <View style={styles.row}>
          <View>
            <AnnouncementSvg />
          </View>
          <View style={styles.courseTxt}>
            <H5
              text={zoomMeetingName}
              style={{color: Colors.PROFILE_TEXT_COLOR}}
            />
          </View>
        </View>
      </View>
      <AppButton
        title="Join Zoom meeting"
        onPress={() => handleJoinMeeting()}
        style={styles.btnWrap}
        textStyle={{color: Colors.WHITE}}
      />
    </View>
  );
};

export default ZoomScreen;

const styles = StyleSheet.create({
  root: {flex: 1, alignItems: 'center'},
  btnWrap: {
    backgroundColor: Colors.ZOOM_COLOR,
    padding: Metrics.baseMargin,
    position: 'absolute',
    top: 300,
    borderRadius: 50,
  },
  announcementCont: {
    paddingVertical: Metrics.verticalScale(10),
    backgroundColor: Colors.WHITE,
    paddingHorizontal: Metrics.scale(10),
    marginBottom: Metrics.baseMargin,
    marginHorizontal: Metrics.smallMargin,
  },
  row: {flexDirection: 'row'},
  dateTxt: {
    ...Fonts.Light(Fonts.Size.xxxSmall, Colors.MSG_COLOR),
    alignSelf: 'flex-end',
    marginHorizontal: 20,
    marginTop: Metrics.smallMargin,
  },
  flexOne: {flex: 1},
  courseTxt: {
    marginTop: Metrics.smallMargin,
    paddingHorizontal: Metrics.baseMargin,
    width: '65%',
  },
  avaImg: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lectTxt: {
    ...Fonts.SemiBold(Fonts.Size.xxxxSmall, Colors.APP_GREEN),
  },
});
