import { combineReducers } from '@reduxjs/toolkit'
import anecdoteReducer from './anecdoteReducer'
import filterReducer from './filterReducer'
import NotificationReducer from './ notificationReducer'

const rootReducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer,
  notifcation: NotificationReducer
})

export default rootReducer
