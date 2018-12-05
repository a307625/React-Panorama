import { createStore, applyMiddleware } from 'redux';
import Immutable from 'immutable';
import promiseMiddleware from 'redux-promise';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const initialState = Immutable.Map();

const configureStore = createStore(
  rootReducer,
  initialState,
  applyMiddleware(createLogger({ stateTransformer: state => state.toJS() }, promiseMiddleware))
)

export default configureStore;
