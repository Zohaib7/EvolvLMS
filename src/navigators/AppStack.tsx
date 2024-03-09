import AppHeader from '@Component/Header/AppHeader';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from '@Theme/Colors';
import NavigationRoutes from './NavigationRoutes';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName={NavigationRoutes.APP_STACK.BOTTOM_TABS}
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
        options={{title: 'Zoom Screen'}}
        name={NavigationRoutes.APP_STACK.ZOOM}
        getComponent={() =>
          require('@Container/AppContainer/Zoom/ZoomScreen').default
        }
      />
      <Stack.Screen
        options={{title: 'Video Player', headerShown: false}}
        name={NavigationRoutes.APP_STACK.VIDEO_PLAYER}
        getComponent={() =>
          require('@Container/AppContainer/VideoPlayer/VideoPlayerScreen')
            .default
        }
      />
      <Stack.Screen
        options={{title: 'Bottom Tabs', headerShown: false}}
        name={NavigationRoutes.APP_STACK.BOTTOM_TABS}
        getComponent={() => require('@Navigator/BottomStack').default}
      />
      <Stack.Screen
        options={{title: 'HOME', headerShown: false}}
        name={NavigationRoutes.APP_STACK.HOME}
        getComponent={() =>
          require('@Container/AppContainer/Home/HomeScreen').default
        }
      />
      <Stack.Screen
        options={{title: 'Courses'}}
        name={NavigationRoutes.APP_STACK.COURSES}
        getComponent={() =>
          require('@Container/AppContainer/Courses/CourseScreen').default
        }
      />
      <Stack.Screen
        options={{title: 'Profile'}}
        name={NavigationRoutes.APP_STACK.PROFILE}
        getComponent={() =>
          require('@Container/AppContainer/Profile/Profile').default
        }
      />
      <Stack.Screen
        options={{title: 'Scan Screen', headerShown: false}}
        name={NavigationRoutes.APP_STACK.SCAN}
        getComponent={() =>
          require('@Container/AppContainer/Scan/ScanScreen').default
        }
      />
      <Stack.Screen
        options={{title: 'Course Detail Screen'}}
        name={NavigationRoutes.APP_STACK.COURSE_DETAIL}
        getComponent={() =>
          require('@Container/AppContainer/CourseDetails/CourseDetailScreen')
            .default
        }
      />
      <Stack.Screen
        options={{title: 'Class Screen'}}
        name={NavigationRoutes.APP_STACK.CLASS}
        getComponent={() =>
          require('@Container/AppContainer/Class/ClassScreen').default
        }
      />
      <Stack.Screen
        options={{title: 'Lecture Screen'}}
        name={NavigationRoutes.APP_STACK.LECTURE}
        getComponent={() =>
          require('@Container/AppContainer/Lecture/LecctureScreen').default
        }
      />
      <Stack.Screen
        options={{title: 'Announcement Screen'}}
        name={NavigationRoutes.APP_STACK.ANNOUNCEMENT}
        getComponent={() =>
          require('@Container/AppContainer/Announcement/AnnouncementScreen')
            .default
        }
      />
      <Stack.Screen
        options={{title: 'Quiz Screen'}}
        name={NavigationRoutes.APP_STACK.QUIZ_RESULT}
        getComponent={() =>
          require('@Container/AppContainer/QuizResults/QuizResultScreen')
            .default
        }
      />
      <Stack.Screen
        options={{title: 'Lecture Detail Screen'}}
        name={NavigationRoutes.APP_STACK.LECTURE_DETAIL}
        getComponent={() =>
          require('@Container/AppContainer/LectureDetail/LectureDetailScreen')
            .default
        }
      />
      <Stack.Screen
        options={{title: 'Personal Information Screen'}}
        name={NavigationRoutes.APP_STACK.PERSONAL_INFORMATION}
        getComponent={() =>
          require('@Container/AppContainer/PersonalInformation/PersonalInformationScreen')
            .default
        }
      />
      <Stack.Screen
        options={{title: 'Report Issue Screen'}}
        name={NavigationRoutes.APP_STACK.REPORT_ISSUE}
        getComponent={() =>
          require('@Container/AppContainer/ReportIssue/ReportIssueScreen')
            .default
        }
      />
      <Stack.Screen
        options={{title: 'Sessions Screen'}}
        name={NavigationRoutes.APP_STACK.SESSIONS}
        getComponent={() =>
          require('@Container/AppContainer/Sessions/SessionScreen').default
        }
      />
      <Stack.Screen
        options={{title: 'Notification Screen'}}
        name={NavigationRoutes.APP_STACK.NOTIFICATION}
        getComponent={() =>
          require('@Container/AppContainer/Notification/NotificationScreen')
            .default
        }
      />
      <Stack.Screen
        options={{title: 'Faqs Screen'}}
        name={NavigationRoutes.APP_STACK.FAQS}
        getComponent={() =>
          require('@Container/AppContainer/Faqs/FaqsScreen').default
        }
      />
      <Stack.Screen
        options={{title: 'Id Card Screen', headerShown: false}}
        name={NavigationRoutes.APP_STACK.ID_CARD}
        getComponent={() =>
          require('@Container/AppContainer/IDCard/IDCardScreen').default
        }
      />
      <Stack.Screen
        options={{title: 'Notes', headerShown: false}}
        name={NavigationRoutes.APP_STACK.NOTES}
        getComponent={() =>
          require('@Container/AppContainer/VideoPlayer/Notes').default
        }
      />
      <Stack.Screen
        options={{title: 'WebView'}}
        name={NavigationRoutes.APP_STACK.WEB_VIEW}
        getComponent={() =>
          require('@Container/ContentTypePages/WebView').default
        }
      />
      <Stack.Screen
        options={{title: 'Messages'}}
        name={NavigationRoutes.APP_STACK.MESSAGES}
        getComponent={() =>
          require('@Container/AppContainer/Messages/Messages').default
        }
      />
      <Stack.Screen
        options={{title: 'All Lectures'}}
        name={NavigationRoutes.APP_STACK.ALL_LECTURES}
        getComponent={() =>
          require('@Container/AppContainer/AllLectures/AllLecturesScreen')
            .default
        }
      />
    </Stack.Navigator>
  );
}
