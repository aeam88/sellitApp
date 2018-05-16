import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class SidedrawerComponent extends Component {
	state = {
		buttons: [
			{
				value: "Home",
				iconName: "home",
				shouldGoTo: "sellitApp.Home",
				typeLink: "tab",
				index: 0,
				privacy: false
			},
			{
				value: "Cambiar",
				iconName: "signing",
				shouldGoTo: "sellitApp.AddPost",
				typeLink: "tab",
				index: 1,
				privacy: false
			},
			{
				value: "Mis productos",
				iconName: "th-list",
				shouldGoTo: "sellitApp.AddPost",
				typeLink: "view",
				index: null,
				privacy: true
			}
		]
	}

	button = (button) => (
		<Icon.Button
			key={button.value}
			name={button.iconName}
			backgroundColor="#474143"
			iconStyle={{width:15}}
			color="#ffffff"
			size={18}
			onPress={() => alert('click')}>
			<Text style={styles.buttonText}>{button.value}</Text>
		</Icon.Button>
	)

	showButtons = (buttons) => (
		buttons.map( button => (
			!button.privacy ? 
				this.button(button)
			:null
		))
	)

	render(){
		return (
			<View style={styles.container}>
				<View style={styles.buttonContainer}>
					{this.showButtons(this.state.buttons)}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#474143'
	},
	buttonContainer: {
		padding: 10,
		marginTop: 20
	},
	buttonText: {
		fontFamily: 'Roboto-Regular',
		fontSize: 13,
		color: '#ffffff'
	}
})

export default SidedrawerComponent;