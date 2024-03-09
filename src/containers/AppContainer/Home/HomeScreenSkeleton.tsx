import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Metrics from '@Utility/Metrics';
import TextSkeleton from '@Component/SkeletonComponents/TextSkeleton';
import AddressesIconSkeleton from '@Component/SkeletonComponents/AddressesIconSkeleton';

const HomeScreenSkeleton = () => {
  return (
    <View style={styles.root}>
      <View style={styles.pricingRow}>
        <View style={{width: '50%'}}>
          <TextSkeleton wrapperStyle={{backgroundColor: 'transparent'}} />
        </View>
        <View style={{width: '15%', marginLeft: 30}}>
          <TextSkeleton wrapperStyle={{backgroundColor: 'transparent'}} />
        </View>
      </View>

      <View style={styles.container}>
        <AddressesIconSkeleton />
        <View style={styles.top} />
        <AddressesIconSkeleton />
      </View>
    </View>
  );
};

export default HomeScreenSkeleton;

const styles = StyleSheet.create({
  root: {
    paddingTop: Metrics.verticalScale(20),
    paddingBottom: Metrics.verticalScale(10),
    paddingHorizontal: Metrics.scale(25),
  },
  pricingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Metrics.verticalScale(10),
    paddingRight: Metrics.scale(20),
  },
  container: {
    marginTop: Metrics.baseMargin,
    flex: 1,
  },
  top: {
    marginTop: Metrics.baseMargin,
    flex: 1,
  },
});
