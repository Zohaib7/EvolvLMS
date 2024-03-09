import {PolygonFail, PolygonPass} from '@Asset/logo';
import FlatListHandler from '@Component/FlatlistHandler';
import H4 from '@Component/Headings/H4';
import H7 from '@Component/Headings/H7';
import {DATE_FORMATS, getFormatedDateTime} from '@Utility/DateUtils';
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import useQuizContainer from '../Home/QuizContainer';
import {styles} from './QuizResultsStyles';
import CustomLottie from '@Component/EmptyCustomLottie/CustomLottie';

const QuizResultScreen = ({route}) => {
  const {params} = route || {};
  const {cohortName} = params || {};
  const {quizesData} = useQuizContainer();
  const {data} = quizesData || {};
  const renderItem = ({item}: any) => {
    const {name, resultName, percentage, submitDate} = item || {};

    return (
      <View style={styles.root}>
        <View style={styles.row}>
          <View style={styles.container}>
            <H4 numberOfLines={3} text={name} style={styles.headTxt} />
            <View style={styles.wrapper}>
              <View
                style={[
                  resultName === 'Fail' ? styles.failBg : styles.passBg,
                  styles.resultWrapper,
                ]}>
                <H7 text={resultName} style={styles.resText} />
              </View>
              <H7
                text={getFormatedDateTime(submitDate, DATE_FORMATS.DATE_FORMAT)}
                style={styles.dateTxt}
              />
            </View>
          </View>
          <View style={styles.imageStyle}>
            <ImageBackground
              source={resultName === 'Fail' ? PolygonFail : PolygonPass}
              resizeMode="contain"
              style={styles.image}>
              {percentage === null ? (
                <Text style={styles.text}>N/A</Text>
              ) : (
                <Text style={styles.text}>{`${percentage}%`}</Text>
              )}
            </ImageBackground>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.subContainer}>
        <View style={styles.subRoot}>
          <H4
            text={cohortName ? cohortName : 'Quiz Results'}
            style={styles.courseStyle}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.flatlistStyle}>
          <H7 text="Your Results" />
          <FlatListHandler
            data={data}
            keyExtractor={item => item?.id}
            renderItem={renderItem}
            listEmptyText="No Data Found"
            emptyCustomComponent={
              <CustomLottie text="No Quiz Results At The Moment" />
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuizResultScreen;
