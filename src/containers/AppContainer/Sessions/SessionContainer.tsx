import {
  getClasses,
  getCourses,
  getDevices,
  getLectures,
  getUserDetails,
} from '@Api/App';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import loginContext from '@Context/loginContext';
import {LoginContext} from '@Context/loginContext/types';
import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import {useContext} from 'react';

export default function useSessionContainer() {
  const {data: sessionData} = useQuery(
    [STORAGE_KEYS.GET_ALL_DEVICES],
    getDevices,
  );

  return {
    sessionData,
  };
}
