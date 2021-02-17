/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//IMPORTAR COMPONENTES, LIBRERIAS REQUERIDAS

import React from 'react';
import { View } from 'react-native';
import DetalleAuto from './src/componentes/DetalleAuto';
import Header from './src/componentes/Header';
import ListaAutos from './src/componentes/ListaAutos';
//CUERPO DEL COMPONENTE

const App = () => {
  return (
        <View style={styles.estiloContenedor}>
          <Header titulo={'Proyecto Automotríz'}/>
          <ListaAutos/>
        </View>
  );
};

const styles={
  estiloContenedor:{
    flex:1,
    backgroundColor: "#eaeaea"
  }
}
//EXPORTAR EL COMPONENTE
export default App;
