import { handleActions } from 'redux-actions';
import { DemoState } from '../constants/models';

import {
} from '../constants/actionTypes';

const demoReducers = handleActions({
}, DemoState);

export default demoReducers;
