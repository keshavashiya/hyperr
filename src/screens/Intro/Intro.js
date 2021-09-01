/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

import { SvgXml } from 'react-native-svg';
import { svgIcon } from '../../../assets/svgfiles';

import Routes from '../../navigation/routes';
import NavigationService from '../../navigation';

const Intro = () => {
	const getStarted = () => {
		NavigationService.navigate(Routes.AUTH);
	};

	return (
		<ScrollView style={{ flex: 1, backgroundColor: '#B8FF98' }}>
			<SafeAreaView style={{ flex: 1, backgroundColor: '#B8FF98', justifyContent: 'space-between' }}>
				<StatusBar barStyle="light-content" />
				<View style={styles.container}>
					<SvgXml xml={svgIcon.Logo} />
				</View>
				<View
					style={{
						flex: 2,
						justifyContent: 'flex-end',
						alignItems: 'center',
						paddingTop: 32,
					}}>
					<Image source={require('../../../assets/img/bag.png')} />
				</View>
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						paddingBottom: 22,
					}}>
					<Text
						style={{
							color: '#000',
							fontSize: 32,
							fontWeight: 'bold',
							fontStyle: 'italic',
						}}>
						GROCERIES IN
					</Text>
					<Text style={{ color: '#000', fontSize: 32, fontWeight: 'bold', fontStyle: 'italic' }}>
						{' '}
						15 MINUTES
					</Text>
				</View>
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						padding: 32,
					}}>
					<TouchableOpacity
						style={{
							justifyContent: 'center',
							padding: 32,
						}}
						onPress={getStarted}>
						<View
							style={{
								justifyContent: 'center',
								alignItems: 'center',
								padding: 22,
								borderRadius: 15,
								backgroundColor: '#000F26',
							}}>
							<Text style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', fontWeight: 'bold' }}>
								GET STARTED
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</ScrollView>
	);
};

export default Intro;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#B8FF98',
		paddingVertical: 32,
	},
});
