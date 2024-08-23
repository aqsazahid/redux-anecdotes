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
      // const newAnecdote = {
      //   id: uuidv4(),
      //   content: action.payload,
      //   votes: 0
      // }
      // state.push(newAnecdote)
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

export const { setAnecdotes, addAnecdote, voteAnecdote, sortAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer
  

