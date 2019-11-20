import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ChatRoom from './chatRoom';
import SignUp from './SignUp';
import Home from './Home';
import Login from './Login';

const NavigationStack = createStackNavigator({
  Home: {screen: Home},
  Login: {screen: Login},
  SignUp: {screen: SignUp},
  ChatRoom: {screen: ChatRoom},
});

const Routes = createAppContainer(NavigationStack);

export default Routes;
