import {queryClient} from '@Api/Client';
import {GreenTick, WhiteTick} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import H6 from '@Component/Headings/H6';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {navigate} from '@Service/navigationService';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './ChapCompStyles';

const ChapComp = ({item, mutateReadStatus}) => {
  const {id, cohortId, name, readStatus} = item;
  const [isReadStatus, setIsReadStatus] = useState(readStatus);

  useEffect(() => {
    queryClient.invalidateQueries([STORAGE_KEYS.GET_ALL_CHAPTERS]);
  }, [readStatus]);

  const handlePress = id => {
    const newReadStatus = isReadStatus
      ? isReadStatus.readStateName
      : 'mark-done';
    const payload = {
      chapterId: id,
      status: newReadStatus,
    };
    mutateReadStatus(payload);

    setIsReadStatus(!isReadStatus);
  };

  return (
    <ButtonView
      onPress={() =>
        navigate(NavigationRoutes.APP_STACK.LECTURE_DETAIL, {
          id,
          cohortId,
          name,
        })
      }
      style={styles.container}>
      <View style={styles.btnWrapper}>
        <H6 text={name} style={styles.text} />
        <ButtonView onPress={() => handlePress(id)}>
          {isReadStatus ? <GreenTick /> : <WhiteTick />}
        </ButtonView>
      </View>
    </ButtonView>
  );
};

export default ChapComp;
//Todo remove styles from here and make a file and import it here
