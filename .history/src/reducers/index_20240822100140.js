import { combineReducers } from '@reduxjs/toolkit'
import anecdoteReducer from './anecdoteReducer'
import filterReducer from './filterSlice'

const rootReducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer,
})

export default rootReducer
