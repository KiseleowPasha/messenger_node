import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducerMessages } from './reduceMessages';
import { reducerInput } from './reducerInput';

const rootReducer = combineReducers({
  messages: reducerMessages,
  input: reducerInput,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
