import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
  { Search: SearchScreen },
  { 
    initialRouteName: 'Search',//default route
    defaultNavigationOptions: {title: 'Business Search'}
  }
);

export default createAppContainer (navigator);