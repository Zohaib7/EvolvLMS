import {getChatMessages, getClasses, getCourses, getMeeting} from '@Api/App';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import {useQuery} from '@tanstack/react-query';

export default function useAnnouncementContainer(id) {
  const {data: chatData, isLoading} = useQuery(
    [STORAGE_KEYS.GET_CHAT_MESSAGES],
    () => getChatMessages({chatId: id}),
    {cacheTime: 0},
  );

  return {
    chatData,
    isLoading,
  };
}
