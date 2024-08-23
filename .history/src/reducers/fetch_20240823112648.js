import axios from 'axios'
import { setAnecdotes } from './anecdoteReducer'

export const fetchAnecdotes = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/anecdotes')
      dispatch(setAnecdotes(response.data))
    } catch (error) {
      console.error('Error fetching anecdotes:', error)
    }
  }
}
