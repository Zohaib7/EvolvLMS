import {updateProfile, uploadPic} from '@Api/App';
import {queryClient} from '@Api/Client';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import loginContext from '@Context/loginContext';
import {LoginContext} from '@Context/loginContext/types';
import {handleUploadImage} from '@Utility/Utils';
import {useMutation} from '@tanstack/react-query';
import React, {useContext, useState} from 'react';
import {AuthLoginResponse} from './types';
import useGetUserDetailsContainer from '../GeneralContainers/GetUserDetailsContainer';

export default function usePersonalInformationContainer() {
  const refForm = React.useRef();
  const {getAllUserDetailsMutate} = useGetUserDetailsContainer();
  const {setUserAuthentication, authUser} = useContext(
    loginContext,
  ) as LoginContext;
  const {mutate: updateProfileMutation} = useMutation(updateProfile, {
    onSuccess: (data: AuthLoginResponse, payload) => {
      setUserAuthentication(data);
      getAllUserDetailsMutate();

      queryClient.invalidateQueries([STORAGE_KEYS.GET_USER]);
    },
  });

  const BottomSheetRef = React.useRef(null);

  const onSubmitForm = () => {
    const data = refForm.current?.onSubmitForm();

    let payload = {
      name: data?.name,
      email: data?.email,
      phoneNumber: data?.phoneNumber,
      city: data?.city,
      address: data?.address,
    };

    if (data != null) {
      updateProfileMutation(payload);
    } else {
      console.log('data : ', data);
    }
  };

  const {mutate: updatePicMutation} = useMutation(uploadPic, {
    onSuccess: data => {
      getAllUserDetailsMutate();

      queryClient.invalidateQueries([STORAGE_KEYS.GET_USER]);
    },
  });

  const UploadImage = () => {
    handleUploadImage(updatePicMutation);
  };
  return {
    refForm,
    onSubmitForm,
    updatePicMutation,
    UploadImage,
    BottomSheetRef,
  };
}
