import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TrucoScreen from './src/screens/trucoScreen';

export default function App() {
  return (
    <View>
      <TrucoScreen/>
      <StatusBar style="auto" />
    </View>
  );
}