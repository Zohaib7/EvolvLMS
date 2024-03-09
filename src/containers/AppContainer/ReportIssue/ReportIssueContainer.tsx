import {useMutation} from '@tanstack/react-query';
import React, {useContext, useState} from 'react';

import {reportIssue, uploadScreenshot} from '@Api/App';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import {MAX_IMAGE_SIZE} from '@Constants/constants';
import {handleUploadImage} from '@Utility/Utils';
import {pop} from '@Service/navigationService';

export default function useReportIssueContainer() {
  const refForm = React.useRef();
  const [isResponse, setIsResponse] = useState();
  const {data} = isResponse || {};
  const formattedFiles = [
    {
      size: data?.size,
      sizeSuffix: data?.sizeSuffix,
      extension: data?.extension,
      rawFileName: data?.rawFileName,
      fileName: data?.fileName,
      fileUrl: data?.fileUrl,
      fileUrlExpiry: data?.fileUrlExpiry,
    },
  ];

  const {mutate: reportIssueMutation} = useMutation(reportIssue, {
    onSuccess: (data, payload) => {},
  });

  const {mutate: updatePicMutation} = useMutation(uploadScreenshot, {
    onSuccess: data => {
      console.log(data, 'Screenshot Uploaded');
      setIsResponse(data);
      pop();
    },
  });

  const UploadImage = () => {
    handleUploadImage(updatePicMutation);
  };
  // const uploadImageToServer = async (uri, fileName, type, base64) => {
  //   const formData = new FormData();
  //   formData.append('file', {
  //     uri: uri,
  //     name: fileName,
  //     type: type,
  //     base64: base64,
  //   });

  //   try {
  //     // Wait for the mutation to complete
  //     const response = await updatePicMutation(formData);
  //     console.log('File Uploaded:', response);

  //     // Return the uploaded file information
  //     return response;
  //   } catch (error) {
  //     console.error('Error uploading file:', error);
  //     throw error; // Re-throw the error to be caught in the caller
  //   }
  // };
  // //Todo code is repeating this was on profile update container also and here thats why create a util and import when ever you want to use
  // const handleUploadImage = () => {
  //   const options = {
  //     mediaType: 'photo',
  //     quality: 0.6, // Adjust the quality (0.0 - 1.0)
  //     maxWidth: 500, // Set maximum width
  //     maxHeight: 500, // Set maximum height
  //     includeBase64: true,
  //   };

  //   launchImageLibrary(options, response => {
  //     if (response.didCancel) {
  //       console.log('Image selection cancelled');
  //     } else if (response.errorMessage) {
  //       console.log('Image selection error:', response.errorMessage);
  //     } else if (response.assets[0]?.fileSize > MAX_IMAGE_SIZE) {
  //       Toast.show({
  //         type: 'error',
  //         text1: 'Error',
  //         text2: 'File size should be less than 10MB',
  //       });
  //       return;
  //     } else {
  //       const {uri, fileName, type, base64} = response.assets[0];
  //       // Perform the upload using FormData
  //       uploadImageToServer(uri, fileName, type, base64);
  //     }
  //   });
  // };

  const onSubmitForm = () => {
    const data = refForm.current?.onSubmitForm();

    let payload = {
      name: data?.name,
      description: data?.description,
      files: formattedFiles || null,
    };

    console.log(payload, 'Issue payload');
    if (data != null) {
      reportIssueMutation(payload);
      pop();
    } else {
      console.log('data : ', data);
    }
  };

  return {
    refForm,
    onSubmitForm,
    updatePicMutation,
    UploadImage,
  };
}
