import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import { navigatorDrawer, navigatorDeepLink, gridTwoColumns } from '../../utils/misc';
import HorizontalScroll from './horizontal_scroll_icons';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { getArticles } from '../../Store/actions/articles_actions';
import { bindActionCreators } from 'redux';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      articles: [],
      categories: ['Todas','Deporte','Musica','Vestuario','Electronica'],
      categorySelected: "Todas"
    }

    this.props.navigator.setOnNavigatorEvent((event) => {
      navigatorDeepLink(event,this)
      navigatorDrawer(event,this)
    })
  }

  updateCategoryHandler = (value) => {
   this.setState({
    categorySelected:value
   }) 
  }

  componentDidMount(){
    this.props.getArticles('Todas').then(() => {
      const newArticles = gridTwoColumns(this.props.Articles.list)

      this.setState({
        isLoading: false,
        articles: newArticles
      })

    })
  }

  render() {
    return (
        <ScrollView>
          <View style={styles.container}>
            <HorizontalScroll 
            categories={this.state.categories}
            categorySelected={this.state.categorySelected}
            updateCategoryHandler={this.updateCategoryHandler} />
            {
              this.state.isLoading ?
                <View style={styles.isLoading}>
                  <Icon name="gears" size={30} color="lightgrey" />
                  <Text style={{color: 'lightgrey'}}>Loading...</Text>
                </View>
              : null
            }
          </View>  
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5
  },
  isLoading: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50
  }
});

function mapStateToProps(state){
  return {
    Articles: state.Articles
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getArticles},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);