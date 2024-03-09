import {getLectures} from '@Api/App';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import {useQuery} from '@tanstack/react-query';

export default function useLecturesContainer() {
  const {data: lecturesData, isLoading} = useQuery(
    [STORAGE_KEYS.GET_ALL_LECTURES],
    getLectures,
  );

  return {
    lecturesData,
    isLoading,
  };
}
