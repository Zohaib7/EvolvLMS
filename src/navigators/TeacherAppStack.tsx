import AppHeader from '@Component/Header/AppHeader';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from '@Theme/Colors';
import NavigationRoutes from './NavigationRoutes';

const Stack = createNativeStackNavigator();

export default function TeacherAppStack() {
  return (
    <Stack.Navigator
      initialRouteName={NavigationRoutes.APP_STACK.SCAN}
      screenOptions={{
        header: props => {
          let state = props.navigation.getState();
          let routeIndex = state?.routes[state?.index]?.state?.index;
          let routeName = state.routes[state.index].name;
          return (
            <AppHeader
              {...props}
              routeName={routeName}
              routeIndex={routeIndex}
            />
          );
        },
        contentStyle: {
          backgroundColor: Colors.WHITE_FOUR,
        },
      }}>
      <Stack.Screen
        options={{title: 'Scan Screen', headerShown: false}}
        name={NavigationRoutes.APP_STACK.SCAN}
        getComponent={() =>
          require('@Container/AppContainer/Scan/ScanScreen').default
        }
      />
    </Stack.Navigator>
  );
}
