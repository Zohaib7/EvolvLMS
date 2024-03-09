import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatListHandler from '@Component/FlatlistHandler';

const HomeScreenFlatlist = ({data, renderItem}) => {
  return (
    <View style={styles.top}>
      <FlatListHandler data={data} renderItem={renderItem} horizontal={true} />
    </View>
  );
};

export default HomeScreenFlatlist;

const styles = StyleSheet.create({
  top: {
    marginTop: 20,
  },
});
