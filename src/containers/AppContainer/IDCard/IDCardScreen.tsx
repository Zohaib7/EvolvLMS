import {BarCode} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import H2 from '@Component/Headings/H2';
import H5 from '@Component/Headings/H5';
import H6 from '@Component/Headings/H6';
import H7 from '@Component/Headings/H7';
import {pop} from '@Service/navigationService';
import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import useHomeScreenContainer from '../Home/HomeScreenContainer';
import styles from './IDCARDStyles';

const IDCardScreen = () => {
  //TODO it should be coming from mmkv
  const {getAllUserDetails} = useHomeScreenContainer();
  //TODO fragments should be removed from whole app if there is any usecase than only implement it
  return (
    <View>
      <View>
        <View style={styles.root} />
        <View style={styles.imgStyle}>
          <Image
            source={{uri: getAllUserDetails?.data?.profilePictureUrl}}
            style={styles.containerImg}
          />
        </View>
      </View>
      <View style={styles.container}>
        <H2 text={getAllUserDetails?.data?.name} style={styles.nameStyle} />
        <H5
          text={getAllUserDetails?.data?.formattedStudentId}
          style={styles.formattedTxt}
        />
      </View>
      <View style={styles.wrapper}>
        <View>
          <H6 text="ID" style={styles.idStyle} />
          <H5
            text={getAllUserDetails?.data?.studentId}
            style={styles.dataStyle}
          />
        </View>
        <View>
          <H6 text="Course Expiry" style={styles.expTxt} />
          <H5 text="23 Sept 2023" style={styles.dateTxt} />
        </View>
      </View>
      <View style={styles.barcodeStyle}>
        <BarCode />
        <H7 text={getAllUserDetails?.data?.id} style={styles.centerStyle} />
      </View>
      <ButtonView onPress={() => pop()} style={styles.closeBtn}>
        <H7 text="Close" style={styles.closeTxt} />
      </ButtonView>
    </View>
  );
};

export default IDCardScreen;
