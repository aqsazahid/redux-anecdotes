import axios from 'axios'
// import { addAnecdotes } from './anecdoteReducer'

const anecdotes = (anecdote) => {
   const newAnecdote = {
        id: uuidv4(),
        content: anecdote,
        votes: 0
    }
  return async (dispatch) => {
    try {
        debugger
      const response = await axios.post('http://localhost:3001/anecdotes',newAnecdote)
      debugger
    //   dispatch(addAnecdotes())
    } catch (error) {
      console.error('Error fetching anecdotes:', error)
    }
  }
}

export default anecdotes 