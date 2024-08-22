import { createSlice } from '@reduxjs/toolkit'
const initialState = 'Success notification' 
const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    clearNotification() {
        return ''
      },
  },
})
  
export const { setNotification } = notificationSlice.actions
export default notificationSlice.reducer