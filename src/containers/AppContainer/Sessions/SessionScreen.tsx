import {Mac, Window} from '@Asset/logo';
import FlatListHandler from '@Component/FlatlistHandler';
import H5 from '@Component/Headings/H5';
import H7 from '@Component/Headings/H7';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import {DATE_FORMATS, getFormatedDateTime} from '@Utility/DateUtils';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import useSessionContainer from './SessionContainer';
import CustomLottie from '@Component/EmptyCustomLottie/CustomLottie';

const SessionScreen = () => {
  const {sessionData} = useSessionContainer();

  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Image source={item.platformName === 'Windows' ? Window : Mac} />
        <View style={styles.wrapper}>
          <H5 text={item?.ipAddress} />
          <View style={styles.row}>
            <H7
              text={getFormatedDateTime(
                item?.lastLoginDateTime,
                DATE_FORMATS.CANADA_DATE_FORMAT,
              )}
              style={styles.dateTxt}
            />
            <H7 text={item?.name} style={styles.nameTxt} />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.flatlistStyle}>
      <FlatListHandler
        data={sessionData?.data}
        keyExtractor={item => item?.id}
        renderItem={renderItem}
        listEmptyText="No Data Found"
        emptyCustomComponent={<CustomLottie text="No Sessions At The Moment" />}
      />
    </View>
  );
};

export default SessionScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: Metrics.smallMargin,
    borderRadius: Metrics.scale(15),
    borderWidth: 1,
    borderColor: Colors.PROFILE_BORDER_COLOR,
    backgroundColor: Colors.WHITE,
    padding: Metrics.doubleBaseMargin,
  },
  wrapper: {marginHorizontal: Metrics.baseMargin, alignSelf: 'center'},
  row: {
    flexDirection: 'row',
  },
  dateTxt: {...Fonts.Regular(Fonts.Size.xxxSmall, Colors.LIGHT)},
  nameTxt: {marginHorizontal: Metrics.baseMargin},
  flatlistStyle: {marginHorizontal: 20},
});
