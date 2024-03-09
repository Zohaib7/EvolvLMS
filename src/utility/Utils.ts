import {Colors} from '@Theme/index';
import debounce from 'lodash.debounce';
import get from 'lodash.get';
import {Linking, Platform, Alert} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Toast from 'react-native-toast-message';

import { MAX_IMAGE_SIZE } from '@Constants/constants';
class utility {
  isPlatformAndroid = () => Platform.OS === 'android';
  isPlatformIOS = () => Platform.OS === 'ios';
  logoutAction: Function | null | undefined = null;

  async openURLCall(url: string) {
    return Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log('Cant handle url' + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => console.error('An error occurred', err));
  }

  getValue(...param: any[]) {
    return get(...param);
  }

  debounce(...param: any[]) {
    return debounce(...param);
  }

  isEmpty(value: string | number | boolean | Array<any> | object): boolean {
    return (
      value === undefined ||
      value === null ||
      value === NaN ||
      value === false ||
      value === 0 ||
      (typeof value === 'object' && Object.keys(value).length === 0) ||
      (typeof value === 'string' && value.trim().length === 0)
    );
  }

  createDynamicUrl(dynamicUrl: string, object: any) {
    for (const key in object) {
      dynamicUrl = dynamicUrl.replace(`{${key}}`, object[key]);
    }
    return dynamicUrl;
  }
  setLogoutAction(cb: Function) {
    if (cb && typeof cb === 'function') {
      this.logoutAction = cb;
    }
  }
  getLogoutAction() {
    return this.logoutAction;
  }
  // checking value logic condition if value is == condition (This Function return Boolean )
  conditionRendering = (item, logic, condition) => {
    switch (logic) {
      case '==':
        return item == condition;
      case '>':
        return item > condition;
      case '<':
        return item < condition;
      case '>=':
        return item >= condition;
      case '<=':
        return item <= condition;
      default:
        throw new Error('Invalid logic operator');
    }
  };

  // Create form data object from selected image
  createFormData = photo => {
    let formObject = {};
    for (let key in photo) {
      if (!photo[key][0].fileName) {
        photo[key][0].fileName =
          photo[key][0].path.split('/')[
            photo[key][0].path.split('/').length - 1
          ];
      }
      if (!photo[key][0].type) {
        photo[key][0].type = photo[key][0].mime;
      }
      if (!photo[key][0].uri) {
        photo[key][0].uri = photo[key][0].path;
      }
      formObject = {
        name: photo[key][0].fileName,
        type: photo[key][0].type,
        uri: photo[key][0].uri,
      };
    }
    return formObject;
  };

  addColorKey = payload => {
    const updatedQualityReport = payload?.map(item => {
      const value = parseFloat(item.value.slice(0, -1)); // Remove the percentage sign and convert to float

      if (isNaN(value)) {
        return {
          ...item,
          color: Colors.Colors.DARK_BLACK,
        };
      } else if (value > 70) {
        return {
          ...item,
          color: Colors.Colors.DARK_GREEN,
        };
      } else if (value > 40) {
        return {
          ...item,
          color: 'orange',
        };
      } else {
        return {
          ...item,
          color: Colors.Colors.RED,
        };
      }
      // }
      return item; // Value is not a number, no color key added
    });

    return {
      qualityReport: updatedQualityReport,
    };
  };
  showAlert(title = 'Title', desc = 'Description', cbOnAccept = () => {}) {
    Alert.alert(title, desc, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Accept', onPress: cbOnAccept},
    ]);
  }
}

export default new utility();



export const handleUploadImage = (updatePicMutation) => {
  const options = {
    mediaType: 'photo',
    quality: 0.6,
    maxWidth: 500,
    maxHeight: 500,
    includeBase64: true,
  };

  launchImageLibrary(options, (response) => {

    if (response.didCancel) {
      console.log('Image selection cancelled');
    } else if (response.errorMessage) {
      console.log('Image selection error:', response.errorMessage);
    } else if (response.assets[0]?.fileSize > MAX_IMAGE_SIZE) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'File size should be less than 10MB',
      });
      return;
    } else {
      const { uri, fileName, type, base64 } = response.assets[0];
      uploadImageToServer(uri, fileName, type, base64, updatePicMutation);
    }
  });
};

const uploadImageToServer = async(uri, fileName, type, base64, updatePicMutation) => {
  const formData = new FormData();
  formData.append('file', {
    uri: uri,
    name: fileName,
    type: type,
    base64: base64,
  });
  try {
    // Wait for the mutation to complete
    const response = await updatePicMutation(formData);
    console.log('File Uploaded:', response);

    // Return the uploaded file information
    return response;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error; // Re-throw the error to be caught in the caller
  }
};

// For Downloading PDF in Api Response
