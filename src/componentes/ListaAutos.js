import React,{ Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import axios from 'axios';
import DetalleAuto from './DetalleAuto';

class ListaAutos extends Component{
    state = { listaAutos:[] };

    componentDidMount(){
        axios.get("https://givecars.herokuapp.com")
        .then(response => {
            this.setState({listaAutos: response.data });
        })
        .catch(error => {
            console.log(error);
        });
        
    }
    listaAMostrar = () => {
        return this.state.listaAutos.map(autos => {
            return <DetalleAuto key={autos.model[0].name} autos={autos}></DetalleAuto>

        })

    };
    render(){
        console.log(this.state);
       return <ScrollView>{this.listaAMostrar()}</ScrollView>; 
    } 
}

export  default ListaAutos;
