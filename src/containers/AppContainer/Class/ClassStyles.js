import {StyleSheet} from 'react-native';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.doubleBaseMargin,
  },
  tabBar: {
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: Metrics.baseMargin,
    borderRadius: Metrics.scale(20),
    backgroundColor: 'transparent',
  },
  activeTab: {
    backgroundColor: Colors.GREEN, // Background color for active tab
  },
  inactiveTab: {
    backgroundColor: 'transparent', // Background color for inactive tab
    borderWidth: 1,
    borderColor: Colors.INPUT_BORDER_COLOR,
  },
  activeText: {
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
  inactiveText: {
    color: Colors.INACTIVE_TEXT, // Text color for inactive tab
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  root: {flex: 1},
  flatlistStyle: {marginHorizontal: 20, marginTop: Metrics.doubleBaseMargin},
});
