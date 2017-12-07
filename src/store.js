import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
// My reducer
import rootReducer from './reducers/index';


const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
  )
)
export default store;
