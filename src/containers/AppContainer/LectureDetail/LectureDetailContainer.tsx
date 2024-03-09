import {getContent} from '@Api/App';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import {useQuery} from '@tanstack/react-query';

export default function useLectureDetailContainer({id, cohortId}) {
  //TODO consoles should be remove from all app

  const {data: contentData} = useQuery(
    [STORAGE_KEYS.GET_ALL_CONTENT],
    () => getContent({id: cohortId, chapId: id}),
    {
      // staleTime: 60000, // Set the cache time to 60 seconds (1 minute)
      cacheTime: 0,
    },
  );

  return {
    contentData,
  };
}
