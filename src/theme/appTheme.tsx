import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
globalMargin:
{
    marginHorizontal:20,
    
},
title:{
    fontSize:30,
    color:'green',
    marginVertical:10
},
input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginVertical:10,
    color:'green',
    borderColor:'green'
  },
  subTitle:{
    fontSize:20,
    color:'green',
    marginVertical:10
}
})


export const estilos = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      borderColor: "green",
      borderWidth: 5,
      padding: 10
    },
    title: {
      fontSize: 25,
      color: 'green',
      fontStyle: 'normal',
    },
    subtitle: {
      fontSize: 20,
      color: 'green'
    },
    marginGlobal: {
      marginHorizontal: 20
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
export const modal = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 10,
      backgroundColor: 'grey',
      borderRadius: 20,
      padding: 10,
      alignItems: 'center',
      shadowColor: '#000',
     
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: 'white',
    },
    textStyle: {
      color: 'green',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      color: 'white',
      fontSize: 20
    },
    input: {
      borderColor: "green",
      borderWidth: 2,
      width: 200,
      padding: 4,
      margin: 20,
      color:'white',
    }
  });