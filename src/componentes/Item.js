import React from 'react';
import {View, Text} from 'react-native';

const Item = (props) =>{
    return <View style={styles.estiloContenedor}>{props.children}</View>
};

const styles={
    estiloContenedor:{
        flexDirection:"column",

    }
};
export default Item;