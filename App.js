import { createStackNavigator, 
         createAppContainer } 
         from "react-navigation";
import HomeScreen from './src/home/Home';
import SegundaScreen from './src/SegundaPagina/SegundaScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  SegundaScreen: {
    screen: SegundaScreen
  }
});

export default createAppContainer(AppNavigator);

