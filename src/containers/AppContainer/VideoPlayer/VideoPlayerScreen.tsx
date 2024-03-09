import {avatar1} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import H4 from '@Component/Headings/H4';
import H7 from '@Component/Headings/H7';
import SpinnerLoader from '@Component/SmallLoader';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {navigate} from '@Service/navigationService';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  View,
  Platform,
} from 'react-native';
import {Vimeo} from 'react-native-vimeo-iframe';
import AllLecturesScreen from '../AllLectures/AllLecturesScreen';
import H5 from '@Component/Headings/H5';

const {width: screenWidth} = Dimensions.get('window'); // Get the screen width

const VideoPlayerScreen = ({route}) => {
  const {params} = route || {};
  const {blobFile, name, teachers, note} = params || {};
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);
  const videoCallbacks = {
    timeupdate: (data: any) => {
      if (data.percent > 50) {
        console.log('timeupdate: ', data);
      }
    },
  };

  const renderTeacherList = ({item}) => {
    return (
      <View style={styles.teacherContainer}>
        <View style={styles.imgWrapper}>
          <Image source={avatar1} />
          <H7 text={item?.name} style={{color: Colors.TEACHER_COLOR}} />
        </View>
      </View>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={
          Platform.OS === 'ios' && {marginTop: Metrics.verticalScale(-30)}
        }>
        {!loading && (
          <Vimeo
            videoId={blobFile}
            params={'api=1&responsive=1'}
            handlers={videoCallbacks}
            style={{width: screenWidth, height: (screenWidth * 9) / 16}} // Set width to screen width and adjust height for a 16:9 aspect ratio
          />
        )}
        <View style={styles.row}>
          <H4 text={name} style={styles.txtStyle} />

          <View style={styles.top}>
            <FlatList
              data={teachers}
              renderItem={renderTeacherList}
              numColumns={2}
            />
          </View>
          {note && (
            <ButtonView
              style={styles.top}
              onPress={() =>
                navigate(NavigationRoutes.APP_STACK.NOTES, {note})
              }>
              <H4 text="Read Notes" style={styles.noteStyle} />
            </ButtonView>
          )}
        </View>
        <H5 text="More Videos" style={styles.vidTxtStyle} />
        <AllLecturesScreen />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  webview: {
    // opacity: 0.7,
  },
  btnTextStyle: {
    ...Fonts.Medium(Fonts.Size.medium, Colors.BLUE_LINK),
    textDecorationLine: 'underline',
  },
  teacherContainer: {
    paddingVertical: Metrics.verticalScale(8),
    borderRadius: Metrics.scale(32),
    borderColor: Colors.DARK_BORDER,
    borderWidth: 1,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 10,
    marginTop: Metrics.smallMargin,
    // width: '50%',
  },
  imgWrapper: {flexDirection: 'row', alignItems: 'center'},
  row: {marginHorizontal: 20},
  txtStyle: {
    ...Fonts.SemiBold(Fonts.Size.large, Colors.BLACK),
    marginTop: Metrics.baseMargin,
  },
  top: {marginTop: Metrics.baseMargin},
  noteStyle: {
    textDecorationLine: 'underline',
    color: Colors.BLUE_LINK,
  },
  vidTxtStyle: {
    ...Fonts.SemiBold(Fonts.Size.medium, Colors.BLACK),
    marginTop: Metrics.baseMargin,
    marginHorizontal: 20,
    marginBottom: Metrics.verticalScale(-10),
  },
});

export default VideoPlayerScreen;
