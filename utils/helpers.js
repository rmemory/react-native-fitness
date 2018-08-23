import React from 'react';
import { View } from 'react-native';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { blue, white } from './colors';

export function getDailyReminderValue () {
	return {
	  today: "👋 Don't forget to log your data today!"
	}
}

export function getMetricMetaInfo (metric) {
	const info = {
		run: {
			displayName: 'Run',
			max: 50,
			unit: 'miles',
			step: 1,
			type: 'steppers',
			getIcon() {
				return (
					<MaterialIcons
					name='directions-run'
					color={blue}
					size={35}
					/>
					// <View style={[styles.iconContainer, {backgroundColor: red}]}>

					// </View>
				)
			}
		},
		bike: {
			displayName: 'Bike',
			max: 100,
			unit: 'miles',
			step: 1,
			type: 'steppers',
			getIcon() {
				return (
					<MaterialCommunityIcons
					name='bike'
					color={blue}
					size={32}
					/>
					// <View style={[styles.iconContainer, {backgroundColor: orange}]}>

					// </View>
				)
			}
		},
		swim: {
			displayName: 'Swim',
			max: 9900,
			unit: 'meters',
			step: 100,
			type: 'steppers',
			getIcon() {
				return (
					<MaterialCommunityIcons
					name='swim'
					color={blue}
					size={35}
					/>
					// <View style={[styles.iconContainer, {backgroundColor: blue}]}>

					// </View>
				)
			}
		},
		sleep: {
			displayName: 'Sleep',
			max: 24,
			unit: 'hours',
			step: 1,
			type: 'slider',
			getIcon() {
				return (
					<FontAwesome
					name='bed'
					color={blue}
					size={30}
					/>
					// <View style={[styles.iconContainer, {backgroundColor: lightPurp}]}>

					// </View>
				)
			}
		},
		eat: {
			displayName: 'Eat',
			max: 10,
			unit: 'rating',
			step: 1,
			type: 'slider',
			getIcon() {
				return (
					<MaterialCommunityIcons
					name='food'
					color={blue}
					size={35}
					/>
					// <View style={[styles.iconContainer, {backgroundColor: pink}]}>

					// </View>
				)
			}
		},
}
	
return typeof metric === 'undefined'
	// If metric param is undefined return the entire info object
	? info
	// Otherwise return the specific metric requested
	: info[metric]
}
	
export function isBetween (num, x, y) {
	if (num >= x && num <= y) {
		return true
	}
	
	return false
}
	
export function calculateDirection (heading) {
	let direction = ''
	
	if (isBetween(heading, 0, 22.5)) {
		direction = 'North'
	} else if (isBetween(heading, 22.5, 67.5)) {
		direction = 'North East'
	} else if (isBetween(heading, 67.5, 112.5)) {
		direction = 'East'
	} else if (isBetween(heading, 112.5, 157.5)) {
		direction = 'South East'
	} else if (isBetween(heading, 157.5, 202.5)) {
		direction = 'South'
	} else if (isBetween(heading, 202.5, 247.5)) {
		direction = 'South West'
	} else if (isBetween(heading, 247.5, 292.5)) {
		direction = 'West'
	} else if (isBetween(heading, 292.5, 337.5)) {
		direction = 'North West'
	} else if (isBetween(heading, 337.5, 360)) {
		direction = 'North'
	} else {
		direction = 'Calculating'
	}
	
	return direction
}
	
export function timeToString (time = Date.now()) {
	const date = new Date(time)
	const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
	return todayUTC.toISOString().split('T')[0]
}
