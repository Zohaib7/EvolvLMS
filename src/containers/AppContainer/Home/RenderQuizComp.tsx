import {PolygonFail, PolygonPass} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import H4 from '@Component/Headings/H4';
import H7 from '@Component/Headings/H7';
import {RESULT_NAME} from '@Constants/constants';
import {DATE_FORMATS, getFormatedDateTime} from '@Utility/DateUtils';
import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import styles from './RenderQuizCompStyles';

const RenderQuizComp = ({item}: any) => {
  const {name, resultName, percentage, submitDate} = item?.item || {};
  //TODO resultName should be a enum
  return (
    <ButtonView style={styles.btnStyle}>
      <View>
        <ImageBackground
          source={resultName === RESULT_NAME.FAIL ? PolygonFail : PolygonPass}
          resizeMode="contain"
          style={styles.image}>
          {percentage === null ? (
            <Text style={styles.text}>N/A</Text>
          ) : (
            <Text style={styles.text}>{`${percentage}%`}</Text>
          )}
        </ImageBackground>
      </View>

      <View style={styles.resultWrap}>
        <H4 text={name} style={styles.txt} />
        <View style={styles.wrapper}>
          <View
            style={[
              resultName === RESULT_NAME.FAIL ? styles.failBg : styles.passBg,
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
    </ButtonView>
  );
};

export default RenderQuizComp;
