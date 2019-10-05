import { createStackNavigator } from 'react-navigation-stack';
import Home from '../Screens/Home/container';
import Login from '../Screens/Login/container'
import ChoosePictureStep from '../Screens/ChoosePictureStep/container';


const commonStack = createStackNavigator({
  ChoosePictureStep:ChoosePictureStep,
  Login: Login,
  Home: Home,


}, {
  initialRouteName: 'ChoosePictureStep',
});

export default commonStack;
