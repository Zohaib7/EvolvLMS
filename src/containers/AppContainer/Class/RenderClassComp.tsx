import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ClassSvg, avatar1} from '@Asset/logo';
import Metrics from '@Utility/Metrics';
import H7 from '@Component/Headings/H7';
import Fonts from '@Theme/Fonts';
import H5 from '@Component/Headings/H5';
import ButtonUnderLine from '@Component/ButtonUnderLine/ButtonUnderLine';
import {Colors} from '@Theme/Colors';
import {DATE_FORMATS, getFormatedDateTime} from '@Utility/DateUtils';
import useClassContainer from '../Home/ClassContainer';
import ZoomService from '@Service/zoom.service';
import {getItem} from '@Service/storageService';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import ButtonView from '@Component/ButtonView';

//TODO remove inline css
const RenderClassComp = ({item}: any) => {
  const {id} = item || {};
  const {meetingData} = useClassContainer(id);
  const {id: meetingNumber, password} = meetingData?.data?.zoomMeeting || {};
  const user = getItem(STORAGE_KEYS.GET_USER);
  const {name} = user || {};
  const handleJoinMeeting = () =>
    ZoomService.joinZoomMeeting(
      meetingNumber,
      name,
      (autoConnectAudio = true),
      password,
    );

  return (
    <View style={styles.root}>
      <ButtonView style={styles.container} onPress={() => handleJoinMeeting()}>
        <View>
          <ClassSvg />
        </View>
        <View style={styles.wrapper}>
          <View style={styles.row}>
            <H7 text="Starts At: " style={styles.dateTxt} />
            <H7
              text={getFormatedDateTime(item?.start, DATE_FORMATS.DATE_FORMAT)}
              style={styles.dateStyle}
            />
          </View>
          <H5 text={item?.name} />
          <H7 text={`${item?.duration} min Long`} style={styles.timeTxt} />
        </View>
        {/* <View style={styles.centerTxt}>
          <ButtonUnderLine
            btnText="Join"
            btnStyle={styles.btnWrapper}
            action={() => handleJoinMeeting()}
          />
          <Image source={avatar1} />
        </View> */}
      </ButtonView>
    </View>
  );
};

export default RenderClassComp;

const styles = StyleSheet.create({
  root: {
    marginVertical: Metrics.smallMargin,
    borderRadius: Metrics.scale(20),
    borderWidth: 1,
    borderColor: Colors.PROFILE_BORDER_COLOR,
    paddingVertical: Metrics.baseMargin,
    paddingHorizontal: Metrics.baseMargin,
    backgroundColor: Colors.WHITE,
  },
  container: {flexDirection: 'row', justifyContent: 'space-around'},
  wrapper: {width: '70%', paddingHorizontal: Metrics.smallMargin},
  row: {flexDirection: 'row'},
  dateTxt: {...Fonts.Light(Fonts.Size.xxxSmall, Colors.GREEN)},
  dateStyle: {...Fonts.Bold(Fonts.Size.xxxSmall, Colors.GREEN)},
  timeTxt: {...Fonts.Regular(Fonts.Size.xxxSmall, Colors.GREEN)},
  centerTxt: {justifyContent: 'space-between'},
  btnWrapper: {
    ...Fonts.Bold(Fonts.Size.xxSmall, Colors.BLUE_LINK),
    marginTop: Metrics.baseMargin,
  },
});
