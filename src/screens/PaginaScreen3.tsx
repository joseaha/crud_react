import React, { useEffect, useState } from 'react'
import { Button, FlatList, Modal, Pressable, Text, View,  TextInput } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { eliminar,actualizar,obtenerListado } from "../api/server";
import { estilos ,modal } from "../theme/appTheme";

interface Props extends StackScreenProps<any, any> { };

export const PaginaScreen3 = ({ navigation }: Props) => {

  const [data, setdata] = useState<Person[]>();

  useEffect(() => {
    obtenerListado(setdata);
  }, [])

  interface Person {
    Apellidos: string | null;
    ID: string;
    Nombre: string;
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [idActualizar, setidActualizar] = useState("");
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoApellidos,setNuevoApellidos] = useState("");

  const openModal = (idUpdate: string) => {
    setModalVisible(true); // Modifica el estado para mostrar el modal
    setidActualizar(idUpdate)
  };

  const closeModal = () => {
    setModalVisible(false); // Modifica el estado para ocultar el modal
  };

  return (
    <View style={estilos.marginGlobal}>
      <Text style={estilos.title}>Lista Personas</Text>
      <Button
      color={'grey'}
        title='Regresar'
        onPress={() => navigation.pop()} />
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={estilos.container}>
            <Text style={estilos.title}>ID: {item.ID}</Text>
            <Text style={estilos.subtitle}>Nombre: {item.Nombre}</Text>
            <Text style={estilos.subtitle}>Apellidos: {item.Apellidos}</Text>
            <View style={estilos.fixToText}>
              <Button title="Actualizar" color={'green'} onPress={() => { openModal(item.ID) }} />
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}>
                <View style={modal.centeredView}>
                  <View style={modal.modalView}>
                    <Text style={modal.modalText}>Actualizar:{idActualizar}</Text>
                    <Text style={modal.modalText}>Nombre:</Text>
                    <TextInput style={modal.input} 
                      value={nuevoNombre} 
                      onChangeText={(nombre)=>{setNuevoNombre(nombre)}}/>
                    <Text style={modal.modalText}>Apellidos:</Text>
                    <TextInput style={modal.input}
                    value={nuevoApellidos} 
                    onChangeText={(apellidos)=>{setNuevoApellidos(apellidos)}}
                    />
                    <Pressable
                      style={[modal.button, modal.buttonClose]}
                      onPress={() => {
                        actualizar(idActualizar,nuevoNombre,nuevoApellidos);
                        obtenerListado(setdata);
                        setModalVisible(!modalVisible)
                      }}>
                      <Text style={modal.textStyle}>Actualizar</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Button
                title="Eliminar"
                color={'red'}
                onPress={() => { eliminar(item.ID) 
                obtenerListado(setdata);
                }}
              />
            </View>
          </View>
        )}
      />
    </View >
  )
}
