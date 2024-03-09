import {getQuizes} from '@Api/App';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import {useQuery} from '@tanstack/react-query';

export default function useQuizContainer() {
  const {data: quizesData, isLoading} = useQuery(
    [STORAGE_KEYS.GET_ALL_QUIZES],
    getQuizes,
  );

  return {
    quizesData,
    isLoading,
  };
}
