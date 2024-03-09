import {getCourses} from '@Api/App';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import {useQuery} from '@tanstack/react-query';

export default function useCourseContainer() {
  const {data: coursesData, isLoading: courseLoading} = useQuery(
    [STORAGE_KEYS.GET_ALL_COURSES],
    getCourses,
    {
      cacheTime: 0,
    },
  );

  return {
    coursesData,
    courseLoading,
  };
}
