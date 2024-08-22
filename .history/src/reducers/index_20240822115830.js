import { combineReducers } from '@reduxjs/toolkit'
import anecdoteReducer from './anecdoteReducer'
import filterReducer from './filterReducer'
import notificationReducer from './ notificationReducer'

const rootReducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer,
  notifcation: notificationReducer
})

export default rootReducer
