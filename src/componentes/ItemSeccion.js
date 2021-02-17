import React from 'react';
import {View, Text} from 'react-native';

const ItemSeccion = (props) =>{
    return <View style={styles.estiloContenedor}>{props.children}</View>
};

const styles={
    estiloContenedor:{
        flexDirection:"column",
        borderWidth:.5,
        borderColor: "#686868"
    }
};
export default ItemSeccion;