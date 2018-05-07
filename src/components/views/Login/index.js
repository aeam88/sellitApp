import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';

import { getOrientation, setOrientationListener, removeOrientationListener, getPlatform } from '../../utils/misc';

import Logo from './logo';
import LoginPanel from './loginPanel';
import LoadTabs from '../Tabs';

class Login extends Component {
  constructor(props){
    super(props)

    this.state = {
      platform:getPlatform(),
      orientation: getOrientation(500),
      logoAnimation:false
    }

    setOrientationListener(this.changeOrientation)
  }

  changeOrientation = () => {
    this.setState({
      orientation: getOrientation(500)
    })
  }

  showLogin = () => {
    this.setState({
      logoAnimation:true
    })
  }

  componentWillUnmount(){
    removeOrientationListener()
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Logo
            showLogin={this.showLogin}
            orientation={this.state.orientation} />
          <LoginPanel 
            show={this.state.logoAnimation}
            orientation={this.state.orientation}
            platform={this.state.platform} />  
        </View>
      </ScrollView>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  }
});

export default Login;