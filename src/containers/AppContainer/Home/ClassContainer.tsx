import {getClasses, getCourses, getMeeting} from '@Api/App';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import {useQuery} from '@tanstack/react-query';

export default function useClassContainer(id) {
  const {data: classeData, isLoading} = useQuery(
    [STORAGE_KEYS.GET_ALL_CLASSES],
    getClasses,
  );

  const {data: meetingData} = useQuery([STORAGE_KEYS.GET_MEETING], () =>
    getMeeting({meetingId: id}),
  );

  return {
    classeData,
    isLoading,
    meetingData,
  };
}
