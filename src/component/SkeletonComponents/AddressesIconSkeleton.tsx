import {DUMMY_LIST_FOR_SKELETON} from '@Constants/dummyData';
import {Colors} from '@Theme/index';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Metrics from '../../utility/Metrics';

const AddressesIconSkeleton = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      {DUMMY_LIST_FOR_SKELETON.map((item, index) => {
        return (
          <View key={index} style={styles.wrapper}>
            <SkeletonPlaceholder enabled={true} style={styles.skeletonWrapper}>
              <View style={styles.innerWrapper}>
                <View style={styles.image} />
                <View style={styles.title} />
              </View>
            </SkeletonPlaceholder>
          </View>
        );
      })}
    </View>
  );
};

export default AddressesIconSkeleton;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Metrics.verticalScale(0),
    flexDirection: 'row',
    // marginHorizontal: Metrics.baseMargin,
    paddingHorizontal: Metrics.smallMargin,
  },
  skeletonWrapper: {
    width: '100%',
    marginBottom: 0,
  },
  innerWrapper: {
    // width: Metrics.scale(80),
  },
  image: {
    width: Metrics.scale(180),
    height: Metrics.scale(180),
    borderRadius: Metrics.scale(20),
  },
  title: {
    marginTop: Metrics.scale(15),
    width: '70%',
    height: Metrics.scale(20),
  },
});
