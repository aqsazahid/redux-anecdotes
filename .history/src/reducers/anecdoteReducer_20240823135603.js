import { createSlice} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    setAnecdotes(state, action) {
      return action.payload
    },
    addAnecdote(state, action) {
      state.push(action.payload)
    },
    updateAnecdote(state, action) {
      debugger
      const id = action.payload.id
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : action.payload
      )
    },
    voteAnecdote(state, action) {
      const id = action.payload
      const anecdote = state.find(a => a.id === id)
      if (anecdote) {
        anecdote.votes += 1
      }
    },
    sortAnecdotes(state) {
      return [...state].sort((a, b) => b.votes - a.votes)
    },
  },
})

export const { setAnecdotes, addAnecdote, voteAnecdote, sortAnecdotes,updateAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer
  

