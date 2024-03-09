import React, {useContext} from 'react';
import {Image, ScrollView, View} from 'react-native';

import {Icon7} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import CustomModal from '@Component/CustomModal/CustomModal';
import FlatListHandler from '@Component/FlatlistHandler';
import H2 from '@Component/Headings/H2';
import H3 from '@Component/Headings/H3';
import H4 from '@Component/Headings/H4';
import H7 from '@Component/Headings/H7';
import {settingList, supportList} from '@Constants/dummyData';
import loginContext from '@Context/loginContext';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {navigate} from '@Service/navigationService';
import {Colors} from '@Theme/Colors';
import LinearGradient from 'react-native-linear-gradient';
import useHomeScreenContainer from '../Home/HomeScreenContainer';
import {styles} from './ProfileStyles';
const Profile = () => {
  const [isDeleteAccountVisible, setIsDeleteAccountVisible] =
    React.useState(false);
  const {handleLogoutUser} = useContext(loginContext);
  const {getAllUserDetails} = useHomeScreenContainer();
  const changeDeleteModalVisible = isDelete => {
    if (isDelete == true) {
      setIsDeleteAccountVisible(!isDeleteAccountVisible);
      handleLogoutUser();
    } else {
      setIsDeleteAccountVisible(!isDeleteAccountVisible);
    }
  };

  const HeaderComp = () => {
    return (
      <LinearGradient
        colors={['#4A9B5A', '#034D11']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.container}>
        <H2 text="Settings" style={styles.root} />
        <View style={styles.headerStyle}>
          <Image
            source={{
              uri: getAllUserDetails?.data?.profilePicture
                ? getAllUserDetails?.data?.profilePicture
                : 'https://cdn.vectorstock.com/i/preview-1x/28/66/profile-placeholder-image-gray-silhouette-vector-21542866.jpg',
            }}
            style={styles.imgStyle}
          />
          <H2 text={getAllUserDetails?.data?.name} style={styles.nameStyle} />
          <ButtonView
            onPress={() => navigate(NavigationRoutes.APP_STACK.ID_CARD)}>
            <H7 text="View ID Card" style={styles.cardStyle} />
          </ButtonView>
        </View>
      </LinearGradient>
    );
  };

  const renderItem = ({item}: any) => {
    return (
      <ButtonView onPress={item?.action} style={styles.btnWrapper}>
        <View style={styles.iconStyle}>{item?.icon}</View>
        <H4
          text={item?.label}
          style={[
            styles.text,
            {
              color: item.isColor ? item.isColor : Colors.BLACK,
            },
          ]}
        />
      </ButtonView>
    );
  };

  return (
    <>
      <HeaderComp />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.compStyle}>
          <View style={styles.top}>
            <H3 text="General" style={styles.sub} />
          </View>

          <View style={styles.top}>
            <FlatListHandler
              data={settingList}
              renderItem={renderItem}
              keyExtractor={item => item?.id}
            />
          </View>
          <View style={styles.top}>
            <H3 text="Support" style={styles.supTxt} />
          </View>
          <View style={styles.top}>
            <FlatListHandler
              data={supportList}
              renderItem={renderItem}
              keyExtractor={item => item?.id}
            />
          </View>
          <ButtonView
            onPress={() => setIsDeleteAccountVisible(true)}
            style={styles.logoutWrapper}>
            <Icon7 />
            <H4 text="Logout" style={styles.logoutTxtStyle} />
          </ButtonView>
        </View>
        <CustomModal
          changeDeleteModalVisible={changeDeleteModalVisible}
          setIsDeleteAccountVisible={setIsDeleteAccountVisible}
          isDeleteAccountVisible={isDeleteAccountVisible}
          title={'Logout'}
          desc={'Are you sure you want to logout?'}
        />
      </ScrollView>
    </>
  );
};

export default Profile;
