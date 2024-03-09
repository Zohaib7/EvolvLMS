import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {avatar1} from '@Asset/logo';
import H7 from '@Component/Headings/H7';

const TeacherName = ({teachers}: any) => {
  const renderTeachers = ({item}: any) => {
    return (
      <View style={styles.container}>
        <Image source={avatar1} />
        <H7 text={item?.name} />
      </View>
    );
  };
  //TODO there is no need to use fragment
  return <FlatList data={teachers} renderItem={renderTeachers} />;
};

export default TeacherName;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
