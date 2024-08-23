import updateAnecdote from './anecdoteReducer'
import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'
export const voteAnecdote = (anecdote) => {
    debugger
    return async (dispatch) => {
        debugger
      const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
      const returnedAnecdote = await axios.put(`${baseUrl}/${anecdote.id}`, updatedAnecdote)
      debugger
      dispatch(updateAnecdote(returnedAnecdote))
    }
 }