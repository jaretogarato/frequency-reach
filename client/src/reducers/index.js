import { combineReducers } from 'redux';
import stats from './stats';

const rootReducer = combineReducers({
  stats,
});

// what redux store looks like here
// initial:
// {}
// apps reducer
// {
//   apps: []
// }
// later
// {
//   apps: [{}, {}, {}...]
// }

export default rootReducer;
