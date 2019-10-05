import { createStackNavigator } from 'react-navigation-stack';
import Home from '../Screens/Home/container';
import Login from '../Screens/Login/container'
import Registro from '../Screens/Registro/container';


const commonStack = createStackNavigator({
  Registro:Registro,
  Login: Login,
  Home: Home,


}, {
  initialRouteName: 'Registro',
});

export default commonStack;
