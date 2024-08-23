import axios from 'axios'
import { addAnecdotes } from './anecdoteReducer'

const Anecdotes = () => {
  return async (dispatch) => {
    try {
        debugger
      const response = await axios.post('http://localhost:3001/anecdotes',object)
      debugger
    //   dispatch(addAnecdotes())
    } catch (error) {
      console.error('Error fetching anecdotes:', error)
    }
  }
}

export default Anecdotes
