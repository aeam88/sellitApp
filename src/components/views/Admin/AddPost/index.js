import React, { Component } from 'react';
import {
  	StyleSheet,
  	Text,
  	View,
  	ScrollView,
  	Button
} from 'react-native';

import { navigatorDrawer } from '../../../utils/misc';
import Input from '../../../utils/forms/inputs';
import ValidationRules from '../../../utils/forms/validationRules';

class AddPost extends Component {
  	constructor(props){
    	super(props);

    	this.props.navigator.setOnNavigatorEvent((event) => {
    	  navigatorDrawer(event,this)
    	})
  	}

  	state = {
    	hasErrors:false,
    	form: {
      		category:{
        		value:"",
        		name:"category",
        		valid:false,
        		type:"picker",
        		options:['Categorías','Deporte','Musica','Vestuario','Electronica'],
        		rules:{
          			isRequired:true
        		}
      		},
    	}
  	}

  	updateInput = (name,value) => {
    	this.setState({
        	hasErrors:false
    	})

    	let formCopy = this.state.form;
    	formCopy[name].value = value;

    	let rules = formCopy[name].rules
    	let valid = ValidationRules(value, rules, formCopy);

    	formCopy[name].valid = valid;

    	this.setState({
        	form:formCopy
    	})

	}

  	render() {
    	return (
        	<ScrollView>
          		<View style={styles.formInputContainer}>
            		<View style={styles.formInputInnerContainer}>
            		  	<Text style={styles.mainTitle}>Cambia tus cosas</Text>
            		</View>
            		<View style={styles.twoColumnsContainer}>
              			<View style={{ flex: 1 }}>
              			  	<Text style={{ marginLeft: 15 }}>Seleccione una categoría</Text>
              			</View>
              			<View style={{ flex: 1 }}>
                			<Input 
                			  	placeholder="Selecciona una categoria"
                			  	type={this.state.form.category.type}
                			  	value={this.state.form.category.value}
                			  	onValueChange={ value => this.updateInput("category", value) }
                			  	options={this.state.form.category.options}
                			/>
              			</View>
            		</View>
          		</View>
        	</ScrollView>
    	);
  	}
}

const styles = StyleSheet.create({
  	formInputContainer: {
  	  	flex: 1,
  	  	flexDirection: 'column'
  	},
  	formInputInnerContainer: {
  	  	flex: 1,
  	  	alignItems: 'center'
  	},
  	mainTitle: {
  	  	fontFamily: 'Roboto-Black',
  	  	fontSize: 30,
  	  	color: '#F2784B',
  	  	marginTop: 20
  	},
  	twoColumnsContainer: {
    	flexDirection: 'row',
    	alignItems: 'center'
  	}
});

export default AddPost;