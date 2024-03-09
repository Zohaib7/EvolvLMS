import React, {useContext} from 'react';
import loginContext from '@Context/loginContext';

export default function useProfileContainer() {
  const [isDeleteAccountVisible, setisDeleteAccountVisible] =
    React.useState(false);
  const {handleLogoutUser} = useContext(loginContext);

  const changeDeleteModalVisible = isLogout => {
    if (isLogout == true) {
      setisDeleteAccountVisible(!isDeleteAccountVisible);
      handleLogoutUser();
    } else {
      setisDeleteAccountVisible(!isDeleteAccountVisible);
    }
  };

  return {
    setisDeleteAccountVisible,
    changeDeleteModalVisible,
    isDeleteAccountVisible,
  };
}
