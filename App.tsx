import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import WardDarkTheme from './src/style/WardDarkTheme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Homepage from './src/screens/homepage/homepage';
import GyroscopePage from './src/screens/gyro/gyroscope';
import CameraPage from './src/screens/camera/camera';

const MyTheme = {
  ...WardDarkTheme,
  colors: {
    ...WardDarkTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#1f146e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Homepage" component={Homepage} options={{
          title: 'Les bubulles'
        }} />
        <Stack.Screen name="Gyroscope" component={GyroscopePage} />
        <Stack.Screen name="Camera" component={CameraPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
