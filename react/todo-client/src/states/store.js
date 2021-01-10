import { 
  applyMiddleware, 
  combineReducers, 
  compose, 
  createStore 
} from 'redux'
import todos from './todo/reducer'
import thunk from 'redux-thunk'

const rootReducers = combineReducers({todos})

const composeEnhancers = 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers, 
  composeEnhancers(applyMiddleware(thunk))
)

export { store }