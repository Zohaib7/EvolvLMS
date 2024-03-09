import {getUserDetails} from '@Api/App';
import loginContext from '@Context/loginContext';
import {LoginContext} from '@Context/loginContext/types';
import {useMutation} from '@tanstack/react-query';
import {useContext} from 'react';

export default function useGetUserDetailsContainer() {
  const {setUserAuthentication} = useContext(loginContext) as LoginContext;

  const {mutate: getAllUserDetailsMutate} = useMutation(getUserDetails, {
    onSuccess: data => {
      setUserAuthentication(data);
    },
  });

  return {
    getAllUserDetailsMutate,
  };
}
