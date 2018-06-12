import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Navigation } from 'react-native-navigation';

import { navigatorDrawer } from '../../../utils/misc';

class NotAllow extends Component {
    constructor(props){
        super(props);

        this.props.navigator.setOnNavigatorEvent((event) => {
            navigatorDrawer(event, this)
        })
    }
    render(){
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Icon 
                    name="frown-o"
                    size={60}
                    color="#F2784B" />
                <Text>Necesitas estar registrado para cambiar</Text>    
                <Button 
                    title = "LOGIN / REGISTRO"
                    color = "#F2784B"
                    onPress = {() => {
                        Navigation.startSingleScreenApp({
                            screen:{
                              screen:"sellitApp.Login",
                              title:"Login",
                              navigatorStyle:{
                                navBarHidden:true
                              }
                            }
                        })    
                    }}
                />    

            </View>
        )
    }
}

export default NotAllow;