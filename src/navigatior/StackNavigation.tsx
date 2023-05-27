import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PaginaScreen1 } from '../screens/PaginaScreen1';
import { PaginaScreen3 } from '../screens/PaginaScreen3';

const Stack = createStackNavigator();

export const StactkNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'black'
        },
        headerStyle: {
          elevation: 0,
          backgroundColor:'green',
        }
      }}
    >
      <Stack.Screen name="PaginaScreen1" options={{title:'Registrar'}} component={PaginaScreen1}  />
      <Stack.Screen name="PaginaScreen3" options={{title:'Listado'}} component={PaginaScreen3}  />
    </Stack.Navigator>
  );
}