import axios from "axios";
import { Alert } from "react-native";

export const agregar = async (ID: string, nombre: string, apellidos: string) => {
    const createTwoButtonAlert = () =>
      Alert.alert('Registro exitoso', 'Se realizo corectamente el ingreso de datos', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
      axios.post('https://apirestjose.azurewebsites.net/persona',{
        ID: ID,
        Nombre: nombre,
        Apellidos: apellidos
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log('Datos guardados exitosamente', response);
           createTwoButtonAlert();
        })
        .catch(error => {
          console.error('Error al guardar los datos:', error);
        });
      console.log(
        'Datos',
        `Nombre: ${nombre}\nApellido: ${apellidos}\nID: ${ID}`
      );
  }



export const obtenerListado = (setData: ((data: any) => void)) => {
    axios.get('https://apirestjose.azurewebsites.net/persona')
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

 export const eliminar = (id: string) => {
    axios.delete(`https://apirestjose.azurewebsites.net/persona/${id}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }


export const actualizar=(ID:string,nombre:string,apellidos:string)=>{
  axios.put(`https://apirestjose.azurewebsites.net/persona/${ID}`,{
        Nombre: nombre,
        Apellidos: apellidos
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
  .then((response) => {
    console.log('Datos guardados exitosamente', response);
    console.log('Actualizacion exitosa')
   
  })
  .catch((error) => {
    console.error('Error al guardar los datos:', error);
  });
console.log(
  'Datos',
  `Nombre: ${nombre}\nApellido: ${apellidos}\nID: ${ID}`
);
}