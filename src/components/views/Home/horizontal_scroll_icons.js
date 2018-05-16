import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const categoriesIcons = (value) => {
	let name = '';
	switch(value){
		case 'Todas':
			name = 'circle-o-notch'
			break;
		case 'Deporte':
			name = 'soccer-ball-o'
			break;
		case 'Musica':
			name = 'music'
			break;
		case 'Vestuario':
			name = 'shopping-bag'
			break;
		case 'Electronica':
			name = 'tv'
			break;
		default:
			name = ''					
	}



	return name;
}

class HorizontalScrollIcons extends Component {

	generateIcon = (categories) => (
		categories ?
			categories.map( item => (
				<View style={{marginRight:15}} key={item}>
					<Icon.Button
						name={categoriesIcons(item)}
						iconStyle={{ marginRight: 10, marginLeft:3 }}
						backgroundColor='#c1c1c1'
						size={20}
						borderRadius={100}>

						<Text style={{ color:'#ffffff', marginRight:5 }}>{item}</Text>

					</Icon.Button>
				</View>
			))
		: null
	)

	render() {
		return (
			<ScrollView
				horizontal={true}
				decelerationRate={0}
				snapToInterval={200}
				showsHorizontalScrollIndicator={false}>

				<View style={styles.scrollContainer}>
					{this.generateIcon(this.props.categories)}
				</View>

			</ScrollView>
		)
	} 
}

const styles = StyleSheet.create({
  	scrollContainer: {
  		flex: 1,
  		flexDirection: 'row',
  		padding: 10,
  		width: '100%'
  	}
});

export default HorizontalScrollIcons;