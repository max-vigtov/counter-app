import React from 'react';
import { FAB } from 'react-native-paper';
import { globalStyles } from '../../theme/global.styles';

interface Props {    
    onPress?: () => void;
    onLongPress?: () => void;
}

  export const PrimaryButton = ( { onPress, onLongPress }: Props ) => {

  return (
    <>    
        <FAB            
          style={globalStyles.fab}
          onPress={() => onPress && onPress() }
          onLongPress={ () => onLongPress && onLongPress()  }
          icon="add"
        /> 
    </>
  );
};