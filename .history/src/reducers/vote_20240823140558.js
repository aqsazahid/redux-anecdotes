import updateAnecdote from './anecdoteReducer'
import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'
const voteAnecdote = (anecdote) => {
    return async (dispatch) => {
      const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
      const returnedAnecdote = await axios.put(`${baseUrl}/${anecdote.id}`, updatedAnecdote)
      dispatch(updateAnecdote(returnedAnecdote.data))
    }
 }

 export default voteAnecdote