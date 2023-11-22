import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'; // Import your Card component
import MatchScreen from '../screens/MatchScreen'; // Import your MatchScreen component


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MatchScreen" component={MatchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;