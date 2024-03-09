import React, {useState, useRef, useContext} from 'react';
import {
  TouchableOpacity,
  Text,
  Linking,
  View,
  Image,
  ImageBackground,
  BackHandler,
  Platform,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from './scanStyle';
import {
  Back,
  BottomPanel,
  Camera,
  CameraRound,
  QrCode,
  ScanLogout,
} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import Metrics from '@Utility/Metrics';
import {LoginContext} from '@Context/loginContext/types';
import loginContext from '@Context/loginContext';
import CustomModal from '@Component/CustomModal/CustomModal';

const ScanScreen = () => {
  const {handleLogoutUser} = useContext(loginContext) as LoginContext;
  const [scan, setScan] = useState(false);
  const [ScanResult, setScanResult] = useState(false);
  const [result, setResult] = useState(null);
  const [isDeleteAccountVisible, setIsDeleteAccountVisible] =
    React.useState(false);

  const scannerRef = useRef(null);

  const onSuccess = e => {
    const check = e.data.substring(0, 4);
    console.log('scanned data' + check);
    setResult(e);
    setScan(false);
    setScanResult(true);

    if (check === 'http') {
      Linking.openURL(e.data).catch(err =>
        console.error('An error occurred', err),
      );
    }
  };

  const activeQR = () => {
    setScan(true);
  };

  const scanAgain = () => {
    setScan(true);
    setScanResult(false);
  };

  const changeDeleteModalVisible = isDelete => {
    if (isDelete == true) {
      setIsDeleteAccountVisible(!isDeleteAccountVisible);
      handleLogoutUser();
    } else {
      setIsDeleteAccountVisible(!isDeleteAccountVisible);
    }
  };

  return (
    <View style={styles.scrollViewStyle}>
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop:
              Platform.OS === 'ios'
                ? Metrics.doubleBaseMargin
                : Metrics.baseMargin,
            padding: Metrics.baseMargin,
          }}>
          <TouchableOpacity onPress={() => BackHandler.exitApp()}>
            <Image source={Back} style={{height: 36, width: 36}} />
          </TouchableOpacity>
          <Text style={styles.textTitle}>Scan QR Code</Text>
          <ButtonView
            onPress={() => setIsDeleteAccountVisible(true)}
            style={{marginHorizontal: Metrics.baseMargin}}>
            <ScanLogout />
          </ButtonView>
        </View>
        {!scan && !ScanResult && (
          <View style={styles.cardView}>
            <Image source={Camera} style={{height: 36, width: 36}} />
            <Text numberOfLines={8} style={styles.descText}>
              Please move your camera {'\n'} over the QR Code
            </Text>
            <Image source={QrCode} style={{margin: 20}} />
            <TouchableOpacity onPress={activeQR} style={styles.buttonScan}>
              <View style={styles.buttonWrapper}>
                <Image source={Camera} style={{height: 36, width: 36}} />
                <Text style={{...styles.buttonTextStyle, color: '#2196f3'}}>
                  Scan QR Code
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        {ScanResult && (
          <>
            <Text style={styles.textTitle1}>Result</Text>
            <View style={ScanResult ? styles.scanCardView : styles.cardView}>
              <Text>Type : {result.type}</Text>
              <Text>Result : {result.data}</Text>
              <Text numberOfLines={1}>RawData: {result.rawData}</Text>
              <TouchableOpacity onPress={scanAgain} style={styles.buttonScan}>
                <View style={styles.buttonWrapper}>
                  <Image source={Camera} style={{height: 36, width: 36}} />
                  <Text style={{...styles.buttonTextStyle, color: '#2196f3'}}>
                    Click to scan again
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </>
        )}
        {scan && (
          <QRCodeScanner
            reactivate={true}
            showMarker={true}
            ref={scannerRef}
            onRead={onSuccess}
            topContent={
              <Text style={styles.centerText}>
                Please move your camera {'\n'} over the QR Code
              </Text>
            }
            bottomContent={
              <View>
                <ImageBackground
                  source={BottomPanel}
                  style={styles.bottomContent}>
                  <TouchableOpacity
                    style={styles.buttonScan2}
                    onPress={() => scannerRef.current.reactivate()}
                    onLongPress={() => setScan(false)}>
                    <Image source={CameraRound}></Image>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            }
          />
        )}
      </>
      <CustomModal
        changeDeleteModalVisible={changeDeleteModalVisible}
        setIsDeleteAccountVisible={setIsDeleteAccountVisible}
        isDeleteAccountVisible={isDeleteAccountVisible}
        title={'Logout'}
        desc={'Are you sure you want to logout?'}
      />
    </View>
  );
};

export default ScanScreen;
