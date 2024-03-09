import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import useStartupContainer from './containers/startupContainer/StartupContainer';
import AppStack from './navigators/AppStack';
import AuthStack from './navigators/AuthStack';
import {navigationRef} from './services/navigationService';
import TeacherAppStack from '@Navigator/TeacherAppStack';
import {ROLE_ID} from '@Constants/constants';

export default function AuthNavigator() {
  const {isAuth, authUser} = useStartupContainer();
  const {data} = authUser || {};

  return (
    <NavigationContainer ref={navigationRef}>
      {isAuth ? (
        data?.roleId === ROLE_ID.TEACHER ? (
          <TeacherAppStack />
        ) : (
          <AppStack />
        )
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}
