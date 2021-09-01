/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	StatusBar,
	SafeAreaView,
	Text,
	TouchableOpacity,
	Keyboard,
	ScrollView,
	KeyboardAvoidingView,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { CodeField, Cursor, useClearByFocusCell } from 'react-native-confirmation-code-field';

const CELL_COUNT = 4;

const Otp = ({ tab, updateTab }) => {
	const [enableMask] = useState(false);
	const [value, setValue] = useState('');
	//const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
	const [props, getCellOnLayoutHandler] = useClearByFocusCell({
		value,
		setValue,
	});

	const renderCell = ({ index, symbol, isFocused }) => {
		let textChild = null;

		if (symbol) {
			textChild = enableMask ? '•' : symbol;
		} else if (isFocused) {
			textChild = <Cursor />;
		}

		return (
			<Text
				key={index}
				style={[styles.cell, isFocused && styles.focusCell]}
				onLayout={getCellOnLayoutHandler(index)}>
				{textChild}
			</Text>
		);
	};

	const handleChange = val => {
		if (val.length === 6) {
			Keyboard.dismiss();
		}
		setValue(val);
	};

	return (
		<KeyboardAvoidingView behavior={'height'} style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<View style={{ flex: 1, margin: 22, justifyContent: 'center', alignItems: 'center' }}>
					<Text style={{ fontSize: 14 }}>We’ve sent and OTP to</Text>
					<Text style={{ fontWeight: 'bold' }}>+44 345974508</Text>
				</View>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<CodeField
						//ref={ref}
						{...props}
						value={value}
						onChangeText={handleChange}
						cellCount={CELL_COUNT}
						keyboardType="number-pad"
						textContentType="oneTimeCode"
						renderCell={renderCell}
					/>
				</View>
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
						paddingHorizontal: 32,
						marginTop: 32,
					}}>
					<View
						style={{
							flex: 1,
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<Text>00:40</Text>
					</View>
					<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
						<Text style={{ textDecorationLine: 'underline', color: '#E5E5E5', fontWeight: 'bold' }}>
							Resend OTP
						</Text>
					</View>
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
							paddingHorizontal: 32,
						}}
						onPress={() => {}}>
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
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

export default Otp;

const styles = StyleSheet.create({
	cell: {
		width: 48,
		height: 56,
		lineHeight: 56,
		fontSize: 32,
		fontWeight: '700',
		textAlign: 'center',
		marginLeft: 8,
		borderRadius: 12,
		backgroundColor: '#E5E5E5',
	},
	focusCell: {
		borderColor: '#000',
	},
});
