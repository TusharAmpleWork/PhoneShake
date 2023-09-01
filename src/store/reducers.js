import {combineReducers} from 'redux';
import {reducer} from '../store/onBoarding/reducer';
import {reducer1} from './homepage/reducer';
export default combineReducers({
  reducer,
  reducer1,
});
