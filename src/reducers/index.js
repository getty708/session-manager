import { combineReducers } from 'redux'
import {routerReducer} from 'react-router-redux'

import progressReducer from './progress'

const rootReducer = combineReducers({
  progress: progressReducer,
  routing: routerReducer,
})
export default rootReducer;
