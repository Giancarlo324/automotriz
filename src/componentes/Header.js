import React from 'react';
import {View, Text} from 'react-native';

const Header = (props) => {
    const {estiloTexto, estiloContenedor} = styles;
    return (
        <View style={estiloContenedor}>
            <Text style={estiloTexto}>{props.titulo}</Text>
        </View>
    );
};

const styles = {
    estiloTexto:{
        fontSize: 20,
        color: "#1e1e1e"
    },
    estiloContenedor:{
        borderRadius: 0,
        borderWidth:0,
        backgroundColor: '#DDE3E3',
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 25
    }
};

export default Header;