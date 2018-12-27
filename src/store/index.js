import { createStore, combineReducers, applyMiddleware } from 'redux';
import apiReducer from './reducers';
import thunk from './middleware/thunk.js'

const reducers = combineReducers({
  api: apiReducer
}) 

export default () => createStore(reducers, applyMiddleware(thunk));