import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { PrimaryButton } from '../components';
import { Button } from 'react-native-paper';


export const CounterScreen = () => {
    const [count, setCount] = useState(10);


  return (
    <View style={ styles.container }>
        <Text style={ styles.title }>{ count }</Text>
        <Button 
            onPress={ () => setCount(count + 1) }
            onLongPress={ () => setCount( 0 ) }
            mode='contained'
        >
            Press me
        </Button>        
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 80,
        color: 'black',
        fontWeight: '300',
    },
});


