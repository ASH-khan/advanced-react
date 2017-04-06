import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import testReducer from './reducer_test'; 

const rootReducer = combineReducers({
  form: formReducer, 
  test: testReducer,
});

export default rootReducer;
