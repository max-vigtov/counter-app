import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../theme/global.styles';
import { PrimaryButton } from '../components';

export const CounterM3Screen = () => {
    const [count, setCount] = useState(10);

  return (
    <View style={ globalStyles.centerContainer }>
        <Text style={ globalStyles.title }>{ count }</Text>
        <PrimaryButton 
        onPress={ () => setCount(count + 1) }
        onLongPress={ () => setCount( 0 ) }        
        />
    </View>
  );
};


