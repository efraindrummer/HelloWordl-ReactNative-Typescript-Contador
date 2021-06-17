import React from 'react';
import { SafeAreaView } from 'react-native';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
//import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
//import { ContadorScreen } from './src/screens/ContadorScreen';
//import { HolaMundoScreen } from './src/screens/HolaMundoScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <DimensionesScreen />
    </SafeAreaView>
    //<HolaMundoScreen />
    //<ContadorScreen />
    //<BoxObjectModelScreen />
  )
}