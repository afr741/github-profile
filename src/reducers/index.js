import { combineReducers } from 'redux';

import profile from './reducer_profile';
import repos from './reducer_repos';

const rootReducer = combineReducers({
  profile,
  repos
});

export default rootReducer;
