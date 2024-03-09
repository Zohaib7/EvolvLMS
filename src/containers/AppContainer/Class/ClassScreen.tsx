import ButtonView from '@Component/ButtonView';
import FlatListHandler from '@Component/FlatlistHandler';
import H6 from '@Component/Headings/H6';
import {MEETING_STATUS} from '@Constants/constants';
import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import useHomeScreenContainer from '../Home/HomeScreenContainer';
import styles from './ClassStyles';
import RenderClassComp from './RenderClassComp';
import useClassContainer from '../Home/ClassContainer';
import CustomLottie from '@Component/EmptyCustomLottie/CustomLottie';
const ClassScreen = () => {
  const {classeData} = useClassContainer();
  const [activeTab, setActiveTab] = useState(1);

  const handleTabPress = index => {
    setActiveTab(index);
  };

  const getActiveTabData = () => {
    //TODO meeting status should be in enum
    //There is only one status available I am unable to know the status id of remaining
    const allData = classeData?.data || [];

    switch (activeTab) {
      case 0: // Previous
        return allData.filter(item => item.meetingStatus === 'Past');
      case 1: // Ongoing
        return allData.filter(item => item.meetingStatus === 'Ongoing');
      case 2: // Upcoming
        return allData.filter(item => item.meetingStatus === 'Upcoming');
      default:
        return allData;
    }
  };
  //TODO labels should be in constant
  const tabLabels = [
    MEETING_STATUS.PREVIOUS,
    MEETING_STATUS.ONGOING,
    MEETING_STATUS.UPCOMING,
  ];

  const renderItem = ({item}) => {
    return <RenderClassComp item={item} />;
  };
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.tabBar}>
          {tabLabels.map((label, index) => (
            <ButtonView
              key={index}
              style={[
                styles.tabItem,
                activeTab === index ? styles.activeTab : styles.inactiveTab,
              ]}
              onPress={() => handleTabPress(index)}>
              <H6
                style={
                  activeTab === index ? styles.activeText : styles.inactiveText
                }
                text={label}
              />
            </ButtonView>
          ))}
        </View>
        <View style={styles.flatlistStyle}>
          <FlatListHandler
            data={getActiveTabData()}
            keyExtractor={item => item?.id}
            renderItem={renderItem}
            listEmptyText="No Data Found"
            emptyCustomComponent={
              <CustomLottie text="No Meetings At The Moment" />
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ClassScreen;
