import * as React from 'react';
import loginContext from '../../contexts/loginContext';
import {LoginContext} from '../../contexts/loginContext/types';

export default function useStartupContainer() {
  const {isAuth, authUser} = React.useContext(loginContext) as LoginContext;

  return {
    isAuth,
    authUser,
  };
}
