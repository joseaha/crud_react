import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
import { TextInput } from 'react-native-gesture-handler';
import { agregar } from "../api/server";

interface Props extends StackScreenProps<any, any> { }

interface Person {
  Apellidos: string | null;
  ID: string;
  Nombre: string;
}

interface MyListProps {
  data: Person[];
}

export const PaginaScreen1 = ({ navigation }: Props) => {
  const [Id, setID] = useState('');
  const handleIdChange = (text: string) => {
    setID(text);
  };

  const [nombre, setNombre] = useState('');
  const handleNombreChange = (text: string) => {
    setNombre(text);
  };

  const [apellido, setApellido] = useState('');
  const handleApellidoChange = (text: string) => {
    setApellido(text);
  };

  const limpiarfrm = () => {
    setID('');
    setNombre('');
    setApellido('');
  }
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Registrar Persona:</Text>
      <Text style={styles.subTitle}>Identificacion:</Text>

      <TextInput
        style={styles.input}
        value={Id}
        onChangeText={handleIdChange}
      />

      <Text style={styles.subTitle}>Nombre:</Text>

      <TextInput style={styles.input}
        value={nombre}
        onChangeText={handleNombreChange}
      />

      <Text style={styles.subTitle}>Apellidos:</Text>

      <TextInput style={styles.input}
        value={apellido}
        onChangeText={handleApellidoChange}
      />

      <View style={{ top: 290 }}>
        <Button color={'green'} title='Agregar' onPress={() => {
          agregar(Id, nombre, apellido)
          limpiarfrm()
        }} />

        <View style={{ marginVertical: 10 }}>
          <Button
            color={'grey'}
            title='Ir al Listado'
            onPress={() => navigation.navigate('PaginaScreen3')}
          />
        </View>
      </View>
    </View>
  );
};
