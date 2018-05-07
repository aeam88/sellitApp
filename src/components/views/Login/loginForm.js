import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Input from '../../utils/forms/inputs';

class LoginForm extends Component {

    state = {
        type:'Login',
        action:'Login',
        actionMode:'No eres usuario, registro',
        hasErrors:false,
        form: {
            email:{
                value:"",
                valid:false,
                type:"textinput",
                rules:{
                    isEmail:true
                }
            },
            password:{
                value:"",
                valid:false,
                type:"textinput",
                rules:{
                    minLength:6
                }
            },
            confirmPassword: {
                value:"",
                valid:false,
                type:"textinput",
                rules:{
                    confirmPass:"password"
                }
            }
        }
    }

    updateInput = (name,value) => {
        this.setState({
            hasErrors:false
        })

        let formCopy = this.state.form;
        formCopy[name].value = value;

        this.setState({
            form:formCopy
        })

    }

    confirmPassword = () => (
        this.state.type != 'Login' ?
        <Input 
            placeholder="Confirme su Password"
            type={this.state.form.confirmPassword.type}
            value={this.state.form.confirmPassword.value}
            onChangeText={ value => this.updateInput("confirmPassword", value) }
            secureTextEntry
        />
        : null
    )

    changeFormType = () => {
        const type = this.state.type;
        this.setState({
            type: type === 'Login' ? 'Registro' : 'Login',
            action: type === 'Login' ? 'Registro' : 'Login',
            actionMode: type === 'Login' ? 'Ya eres usuario, login' : 'No eres usuario, registro'
        })
    }

    render(){
        return(
            <View style={styles.formInputContainer}>
                <Input 
                    placeholder="Email"
                    type={this.state.form.email.type}
                    value={this.state.form.email.value}
                    onChangeText={ value => this.updateInput("email", value) }
                    autoCapitaliza={"none"}
                    keyboardType={"email-address"}
                />

                <Input 
                    placeholder="Password"
                    type={this.state.form.password.type}
                    value={this.state.form.password.value}
                    onChangeText={ value => this.updateInput("password", value) }
                    secureTextEntry
                />

                {this.confirmPassword()}

                <View style={
                    this.props.platform === 'android'
                    ? styles.buttonStyleAndroid
                    : styles.buttonStyleIos
                }>
                    <Button 
                        title={this.state.action}
                        color="#F2784B"
                        onPress={() => alert('accion')}
                    />
                </View>
                <View style={
                    this.props.platform === 'android'
                    ? styles.buttonStyleAndroid
                    : styles.buttonStyleIos
                }>
                    <Button 
                        title={this.state.actionMode}
                        color="lightgrey"
                        onPress={this.changeFormType}
                    />
                </View>
                <View>
                    <Button 
                        title="Lo hare luego"
                        color="lightgrey"
                        onPress={() => alert('change')}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formInputContainer: {
        minHeight: 400
    },
    buttonStyleAndroid: {
        marginBottom: 10,
        marginTop: 10
    },
    buttonStyleIos: {
        marginBottom: 0
    }
})

export default LoginForm;