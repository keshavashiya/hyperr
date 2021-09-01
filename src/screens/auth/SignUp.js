/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
	StyleSheet,
	View,
	StatusBar,
	SafeAreaView,
	Text,
	TouchableOpacity,
	Image,
	ScrollView,
	KeyboardAvoidingView,
} from 'react-native';
import { TextInput } from 'react-native-paper';

const SignUp = ({ tab, updateTab }) => {
	const changeTab = () => {
		updateTab('ENTER OTP');
	};

	return (
		<KeyboardAvoidingView behavior={'height'} style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<View style={{ flex: 1, margin: 22 }}>
					<View>
						<Text style={{ fontSize: 14 }}>First Name</Text>
						<TextInput
							theme={{ colors: { primary: '#E5E5E5' } }}
							style={{ backgroundColor: '#E5E5E5' }}
							mode={'outlined'}
						/>
					</View>
					<View style={{ marginTop: 22 }}>
						<Text style={{ fontSize: 14 }}>Phone Number</Text>
						<TextInput style={{ backgroundColor: '#E5E5E5' }} mode={'outlined'} />
					</View>
					<View style={{ marginTop: 22 }}>
						<Text style={{ fontSize: 14 }}>Email ID</Text>
						<TextInput style={{ backgroundColor: '#E5E5E5' }} mode={'outlined'} />
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
								// padding: 32,
							}}
							onPress={changeTab}>
							<View
								style={{
									justifyContent: 'center',
									alignItems: 'center',
									padding: 18,
									borderRadius: 15,
									backgroundColor: '#B8FF98',
								}}>
								<Text style={{ color: '#000', fontSize: 18, fontStyle: 'italic', fontWeight: 'bold' }}>
									SIGN UP
								</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
							padding: 12,
						}}>
						<Text style={{ fontSize: 14 }}>Already have an account?</Text>
						<Text style={{ fontWeight: 'bold' }}>Login</Text>
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

export default SignUp;

const styles = StyleSheet.create({});
