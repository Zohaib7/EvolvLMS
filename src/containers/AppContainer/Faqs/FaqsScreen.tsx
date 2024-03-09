import {FaqsIcon, FaqsIcon2} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import FlatListHandler from '@Component/FlatlistHandler';
import H6 from '@Component/Headings/H6';
import H7 from '@Component/Headings/H7';
import {FaqsList} from '@Constants/dummyData';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React, {useState} from 'react';
import {LayoutAnimation, StyleSheet, View} from 'react-native';

const FaqsScreen = () => {
  // Create an array of boolean values to represent the open/close state for each FAQ item
  const [isOpenArray, setIsOpenArray] = useState(
    Array(FaqsList.length).fill(false),
  );

  const handleTogglePress = index => {
    // Create a copy of the isOpenArray and toggle the state for the clicked FAQ item
    const updatedIsOpenArray = [...isOpenArray];
    updatedIsOpenArray[index] = !updatedIsOpenArray[index];

    // Customize the animation duration (e.g., 400 milliseconds)
    const customLayoutAnimation = {
      duration: 400, // Adjust this value as needed
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.linear,
      },
    };

    setIsOpenArray(updatedIsOpenArray);
    LayoutAnimation.configureNext(customLayoutAnimation);
  };
  //Todo remove inline css
  const renderItem = ({item, index}) => {
    const isDetails = isOpenArray[index]; // Get the open/close state for this FAQ item

    return (
      <View style={styles.root}>
        <ButtonView
          onPress={() => handleTogglePress(index)} // Pass the index to identify the clicked FAQ item
          style={styles.container}>
          <H6 text={item?.label} />
          <View>{isDetails ? <FaqsIcon2 /> : <FaqsIcon />}</View>
        </ButtonView>
        {isDetails && <H7 style={styles.detailTxt} text={item?.desc} />}
      </View>
    );
  };
  //TODO there is no need to add fragment here
  return (
    <FlatListHandler
      data={FaqsList}
      keyExtractor={item => item?.id}
      renderItem={renderItem}
    />
  );
};

export default FaqsScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.WHITE,
    paddingVertical: Metrics.baseMargin,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: Metrics.smallMargin,
    borderRadius: Metrics.scale(10),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailTxt: {
    ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.FAQS_COLOR),
    marginTop: Metrics.baseMargin,
  },
});
