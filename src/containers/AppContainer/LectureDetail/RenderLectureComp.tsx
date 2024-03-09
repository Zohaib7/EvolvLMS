import {ContentImg} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import H6 from '@Component/Headings/H6';
import H7 from '@Component/Headings/H7';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {navigate} from '@Service/navigationService';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const RenderLectureComp = ({item}: any) => {
  const {name, teachers, note} = item || {};
  const {blobFile} = item?.lecture?.videoMedia || {};
  return (
    <ButtonView
      onPress={() =>
        navigate(NavigationRoutes.APP_STACK.VIDEO_PLAYER, {
          blobFile,
          name,
          teachers,
          note,
        })
      }
      style={styles.root}>
      <View style={styles.row}>
        <Image source={ContentImg} />
        <View style={styles.container}>
          <H7 text={name} style={styles.nameTxt} />
          <H6 text={name} />
          <H7 text={item?.time} style={styles.timeTxt} />
        </View>
      </View>
    </ButtonView>
  );
};

export default RenderLectureComp;

const styles = StyleSheet.create({
  root: {
    marginVertical: Metrics.smallMargin,
    borderRadius: Metrics.scale(20),
    borderWidth: 1,
    borderColor: Colors.PROFILE_BORDER_COLOR,
    backgroundColor: Colors.WHITE,
    paddingVertical: Metrics.verticalScale(15),
    paddingHorizontal: Metrics.smallMargin,
  },
  row: {flexDirection: 'row'},
  container: {width: '60%', marginHorizontal: Metrics.baseMargin},
  nameTxt: {...Fonts.Light(Fonts.Size.xxxSmall, Colors.APP_GREEN)},
  timeTxt: {
    ...Fonts.Light(Fonts.Size.xxxSmall, Colors.APP_GREEN),
    alignSelf: 'flex-end',
    marginTop: Metrics.baseMargin,
  },
});
