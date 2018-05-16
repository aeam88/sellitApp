import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import { navigatorDrawer, navigatorDeepLink } from '../../utils/misc';
import HorizontalScroll from './horizontal_scroll_icons';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      categories: ['Todas','Deporte','Musica','Vestuario','Electronica']
    }

    this.props.navigator.setOnNavigatorEvent((event) => {
      navigatorDeepLink(event,this)
      navigatorDrawer(event,this)
    })
  }
  render() {
    return (
        <ScrollView>
          <View style={styles.container}>
            <HorizontalScroll 
            categories={this.state.categories} />
          </View>  
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5
  }
});

export default Home;