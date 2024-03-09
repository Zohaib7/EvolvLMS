import {getAllChatMessages} from '@Api/App';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import {useQuery} from '@tanstack/react-query';

export default function useMessageContainer() {
  const {data: allMessagesData} = useQuery(
    [STORAGE_KEYS.GET_ALL_CHAT_MESSAGES],
    getAllChatMessages,
  );

  return {
    allMessagesData,
  };
}
