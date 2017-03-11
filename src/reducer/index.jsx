'use strict';

import { combineReducers } from 'redux';
import AuthReducer from './Auth';

const allReducers = combineReducers(Object.assign({}, AuthReducer));

export default allReducers;