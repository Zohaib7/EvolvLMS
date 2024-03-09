import Metrics from '@Utility/Metrics';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const CourseSkeleton = ({wrapperStyle}) => {
  const renderSkeletons = () => {
    const skeletons = [];

    for (let i = 0; i < 5; i++) {
      skeletons.push(
        <View key={i} style={[styles.wrapper, wrapperStyle]}>
          <SkeletonPlaceholder enabled={true} style={styles.skeletonWrapper}>
            <View style={styles.articelTextFull} />
          </SkeletonPlaceholder>
        </View>,
      );
    }

    return skeletons;
  };
  return <View>{renderSkeletons()}</View>;
};

export default CourseSkeleton;

const styles = StyleSheet.create({
  wrapper: {},
  skeletonWrapper: {width: '100%'},
  articelTextFull: {
    width: '100%',
    height: 130,
    marginTop: 5,
    borderRadius: Metrics.doubleBaseMargin,
  },
});
