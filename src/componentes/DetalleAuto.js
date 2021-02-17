import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Item from './Item';
import ItemSeccion from './ItemSeccion';
import Button from './Button';


const DetalleAuto = (props) => {

    return (
        <Item>
            <ItemSeccion>
                <View style={styles.estiloContenedor}>
                    <Text style={styles.estiloTexto}>{props.autos.brand}</Text>
                    <Text style={styles.estiloTexto}>{props.autos.model[0].name}</Text>
                </View>
            </ItemSeccion>
            <ItemSeccion>
                <Image  style={styles.estiloImagen}
                    
                    source={{
                        uri: props.autos.model[0].image,
                    }}
                />
            </ItemSeccion>
            <ItemSeccion>
                <Button botonPresionado={() => { Linking.openURL(props.autos.model[0].url); }}/>
            </ItemSeccion>
        </Item>
    );

};

const styles = {
    estiloContenedor:{
        flexDirection: "column",
        justifyContent: "space-between"
    },
    estiloImagen:{
        height: 300,
        width:"100%"
    
    },
    estiloTexto:{
        fontSize: 18,
        fontWeight: '200',
        textTransform: 'uppercase'
    }
    
}

export default DetalleAuto;