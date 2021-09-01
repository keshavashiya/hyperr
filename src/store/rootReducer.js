import { combineReducers } from '@reduxjs/toolkit';

/** App */

import appReducers from '../services/store';

const createReducer = asyncReducers =>
	combineReducers({
		...asyncReducers,

		app: appReducers,
	});

export default createReducer;
