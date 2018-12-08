import { handleActions } from 'redux-actions';
import { DemoState } from '../constants/models';

import {
  SET_PANORAMA_INDEX
} from '../constants/actionTypes';

const demoReducers = handleActions({
  SET_PANORAMA_INDEX: (state, { payload }) => (
    state.set('panoramaIndex', payload.value)
  )
}, DemoState);

export default demoReducers;
