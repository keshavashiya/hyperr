/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';
import { Divider } from 'react-native-paper';

import { SvgXml } from 'react-native-svg';
import { svgIcon } from '../../../assets/svgfiles';

import SignUp from './SignUp';
import Otp from './Otp';

const Auth = () => {
	const [tab, setTab] = useState('SIGN UP');

	const updateTab = val => {
		setTab(val);
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#B8FF98' }}>
			<StatusBar barStyle="light-content" />
			<View style={{ flex: 1, backgroundColor: '#B8FF98', marginHorizontal: 16 }}>
				<View style={styles.container}>
					<SvgXml xml={svgIcon.Logo} />
				</View>
				<View
					style={{
						flex: 4,
						backgroundColor: '#fff',
						borderTopLeftRadius: 25,
						borderTopRightRadius: 25,
					}}>
					<View
						style={{
							// justifyContent: 'center',
							// alignItems: 'center',
							padding: 16,
							flexDirection: 'row',
						}}>
						{tab === 'ENTER OTP' && (
							<TouchableOpacity
								style={{
									justifyContent: 'center',
									alignItems: 'center',
									paddingHorizontal: 6,
								}}
								onPress={() => updateTab('SIGN UP')}>
								<View>
									<SvgXml xml={svgIcon.arrow} />
								</View>
							</TouchableOpacity>
						)}
						<View
							style={{
								justifyContent: 'center',
								alignItems: 'center',
								flex: 1,
								marginLeft: tab === 'ENTER OTP' ? -20 : 0,
							}}>
							<Text style={{ fontSize: 20, fontWeight: 'bold', fontStyle: 'italic' }}>{tab}</Text>
						</View>
					</View>
					<Divider style={{ height: 5 }} />
					<View style={{ margin: 16, flex: 1 }}>
						{tab === 'SIGN UP' && <SignUp tab={tab} updateTab={updateTab} />}
						{tab === 'ENTER OTP' && <Otp tab={tab} updateTab={updateTab} />}
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Auth;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#B8FF98',
		paddingVertical: 22,
	},
});
