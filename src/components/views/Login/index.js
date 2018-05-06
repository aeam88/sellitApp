import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';

import Logo from './logo';

import LoadTabs from '../Tabs';

class Login extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Logo />
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