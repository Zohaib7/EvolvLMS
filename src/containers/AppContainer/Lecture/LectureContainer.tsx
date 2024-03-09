import {
  getChapters,
  getClasses,
  getCourses,
  getLectures,
  getUserDetails,
  markReadStatus,
} from '@Api/App';
import {queryClient} from '@Api/Client';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import loginContext from '@Context/loginContext';
import {LoginContext} from '@Context/loginContext/types';
import {useInfiniteQuery, useMutation, useQuery} from '@tanstack/react-query';
import {useContext} from 'react';

export default function useLectureContainer(cohortId) {
  const {data: chapterData} = useQuery(
    [STORAGE_KEYS.GET_ALL_CHAPTERS],
    () => getChapters({id: cohortId}),
    {
      // staleTime: 60000, // Set the cache time to 60 seconds (1 minute)
      cacheTime: 0,
    },
  );
  const {mutate: mutateReadStatus} = useMutation(markReadStatus, {
    onSuccess: (data: any) => {
      queryClient.invalidateQueries([STORAGE_KEYS.GET_ALL_CHAPTERS]);
    },
  });

  return {
    chapterData,
    mutateReadStatus,
  };
}
