import {authRefresh, getUserDetails} from '@Api/App';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import loginContext from '@Context/loginContext';
import {LoginContext} from '@Context/loginContext/types';
import {getItem} from '@Service/storageService';
import {useMutation, useQuery} from '@tanstack/react-query';
import {useContext} from 'react';

export default function useHomeScreenContainer() {
  const {mutate: refreshMutation} = useMutation(authRefresh, {
    onSuccess: data => {},
  });
  const {setUserAuthentication, authUser, handleLogoutUser} = useContext(
    loginContext,
  ) as LoginContext;

  const {data: getAllUserDetails, isLoading: userLoading} = useQuery(
    [STORAGE_KEYS.GET_USER],
    getUserDetails,
    {
      onSuccess: data => {
        setUserAuthentication(data);
      },
    },
  );

  return {
    getAllUserDetails,
    refreshMutation,
    userLoading,
  };
}
