import 'react-native-gesture-handler';


import { NavigationContainer } from '@react-navigation/native';//Agregar para usar navegacion
import { StactkNavigation } from './src/navigatior/StackNavigation';

import React from 'react';

const App = () => {
  return (
      <NavigationContainer>
        <StactkNavigation />
      </NavigationContainer>
  )
}

export default App;

