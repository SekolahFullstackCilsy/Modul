import { combineReducers, createStore } from 'redux'
import todos from './todo/reducer'

const rootReducers = combineReducers({todos})

const store = createStore(rootReducers)

export { store }