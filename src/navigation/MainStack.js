import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './routes';

import Intro from '../screens/Intro/Intro';
import Auth from '../screens/auth/Auth';

const Stack = createStackNavigator();

export default props => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Routes.INTRO}>
			<Stack.Screen name={Routes.INTRO} component={Intro} />
			<Stack.Screen name={Routes.AUTH} component={Auth} />
		</Stack.Navigator>
	);
};
