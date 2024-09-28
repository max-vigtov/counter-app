import {  View  } from 'react-native';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';
import IonIcon from 'react-native-vector-icons/Ionicons';

export const App = () => {
  return (
    <PaperProvider
      settings={{ 
        icon: (props) => <IonIcon { ...props }/>
       }}
    >
      <View style={{ flex: 1 }} >
        <CounterM3Screen/>
      </View>      
    </PaperProvider>

  );
};
