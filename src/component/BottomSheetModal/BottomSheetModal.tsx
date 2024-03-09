import {Colors} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';

const BottomSheetModal = React.forwardRef((props: any, ref) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  // TODO: make typescript file for it and resolve height issue (Ahmed)

  React.useImperativeHandle(
    ref,
    () => ({
      hide: () => {
        setIsModalVisible(false);
      },
      show: () => {
        setIsModalVisible(true);
      },
    }),
    [],
  );

  return (
    <View style={{flex: 1}}>
      <ReactNativeModal
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        animationInTiming={500}
        animationOutTiming={1000}
        isVisible={isModalVisible}
        backdropOpacity={0.5}
        style={styles.modalize}
        onBackdropPress={() => {
          setIsModalVisible(false);
        }}
        backdropTransitionOutTiming={0}>
        <View
          style={[
            styles.bottomSheetInnerWrapper,
            props?.height ? {height: props?.height} : null,
          ]}>
          {props?.children}
        </View>
      </ReactNativeModal>
    </View>
  );
});

const styles = StyleSheet.create({
  modalize: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
  bottomSheetInnerWrapper: {
    height: Metrics.verticalScale(300),
    backgroundColor: Colors.Colors.WHITE,
    zIndex: 9999,
    shadowColor: Colors.Colors.BLACK,
    shadowOpacity: 1,
    shadowRadius: Metrics.scale(20),
    elevation: 45,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
    paddingHorizontal: Metrics.scale(25),
    paddingRight: Metrics.scale(35),
    paddingTop: Metrics.scale(20),
  },
});

export default BottomSheetModal;
