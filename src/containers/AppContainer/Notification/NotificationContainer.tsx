import {getAllChatMessages, getNotifications} from '@Api/App';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import {useQuery} from '@tanstack/react-query';

export default function useNotificationContainer() {
  const {data: allNotificationData} = useQuery(
    [STORAGE_KEYS.GET_NOTIFICATIONS],
    getNotifications,
  );

  return {
    allNotificationData,
  };
}
