import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { red } from '../utils/colors';

export default FitnessStepper = ({ max, unit, step, value, onIncrement, onDecrement }) => (
	<View>
	<View>
		<TouchableOpacity 
			onPress={onDecrement}
		>
			<FontAwesome name="minus" size={30} color={red} />
		</TouchableOpacity>
		<TouchableOpacity 
			onPress={onIncrement}
		>
			<FontAwesome name="plus" size={30} color={red} />
		</TouchableOpacity>
	</View>
	<View>
		<Text>
			{value}
		</Text>
		<Text>
			{unit}
		</Text>
	</View>
	</View>
);