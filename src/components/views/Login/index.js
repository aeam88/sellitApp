import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import LoadTabs from '../Tabs';

class Login extends Component {
  render() {
    return (
      <View>
        <Text>Login</Text>
        <Button
          title="Ir a Home"
          onPress={()=>{
            LoadTabs();
          }} />
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  
});

export default Login;