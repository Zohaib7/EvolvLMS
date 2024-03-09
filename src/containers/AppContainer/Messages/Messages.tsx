import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React from 'react';
import H2 from '@Component/Headings/H2';
import Fonts from '@Theme/Fonts';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import useMessageContainer from './MessagesContainer';
import {navigate} from '@Service/navigationService';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import ButtonView from '@Component/ButtonView';
import H7 from '@Component/Headings/H7';
import H6 from '@Component/Headings/H6';
import {ContentImg} from '@Asset/logo';
import FlatListHandler from '@Component/FlatlistHandler';
import CustomLottie from '@Component/EmptyCustomLottie/CustomLottie';

const Messages = () => {
  const {allMessagesData} = useMessageContainer();
  const renderItem = ({item}: any) => {
    const {name, id} = item || {};
    return (
      <ButtonView
        onPress={() =>
          navigate(NavigationRoutes.APP_STACK.ANNOUNCEMENT, {id, name})
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
  return (
    <SafeAreaView style={styles.roots}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginVertical: Metrics.doubleBaseMargin,
          marginHorizontal: 10,
        }}>
        <H2 text="Announcements" style={styles.cohortStyle} />
        <FlatListHandler
          data={allMessagesData?.data}
          keyExtractor={item => item?.id}
          renderItem={renderItem}
          listEmptyText="No Data Found"
          emptyCustomComponent={
            <CustomLottie text="No Announcements At The Moment" />
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  roots: {flex: 1},
  cohortStyle: {
    ...Fonts.SemiBold(Fonts.Size.xLarge, Colors.DARK_BLACK),
  },
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
