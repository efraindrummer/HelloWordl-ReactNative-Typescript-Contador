import React from 'react';
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
//import { ContadorScreen } from './src/screens/ContadorScreen';
//import { HolaMundoScreen } from './src/screens/HolaMundoScreen';

export const App = () => {
  return (
    <SafeAreaView>
      <BoxObjectModelScreen />
    </SafeAreaView>
    //<HolaMundoScreen />
    //<ContadorScreen />
  )
}