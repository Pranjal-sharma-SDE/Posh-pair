import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import AppNavigator from './src/Navigation/AppNavigator';
import 'react-native-gesture-handler';

export default function App() {
  return (

      <AppNavigator />
     
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
