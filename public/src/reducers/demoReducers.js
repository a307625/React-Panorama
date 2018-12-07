import { handleActions } from 'redux-actions';
import { DemoState } from '../constants/models';

import {
  SET_PANORAMA
} from '../constants/actionTypes';

const demoReducers = handleActions({
  SET_PANORAMA: (state, { payload }) => (
    state.set('panorama', payload.value)
  )
}, DemoState);

export default demoReducers;
