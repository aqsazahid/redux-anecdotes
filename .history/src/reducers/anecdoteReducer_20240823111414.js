import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
const baseUrl = 'http://localhost:3001/anecdotes'

// const initialState = [
//   { id: uuidv4(), content: 'If it hurts, do it more often', votes: 0 },
//   { id: uuidv4(), content: 'Adding manpower to a late software project makes it later!', votes: 0 },
//   { id: uuidv4(), content: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0 },
//   { id: uuidv4(), content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0 },
//   { id: uuidv4(), content: 'Premature optimization is the root of all evil.', votes: 0 },
//   { id: uuidv4(), content: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0 }
// ]
const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    setAnecdotes(state, action) {
      debugger
      return action.payload
    },
    addAnecdote(state, action) {
      const newAnecdote = {
        id: uuidv4(),
        content: action.payload,
        votes: 0
      }
      state.push(newAnecdote)
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
    // extraReducers: (builder) => {
    //   builder.addCase(fetchAnecdotes.fulfilled, (state, action) => {
    //     return action.payload
    //   })
    // }
  },
})
export const fetchAnecdotes = () => async (dispatch) => {
  debugger
  try {
    const response = await axios.get('http://localhost:3001/anecdotes')
    dispatch(setAnecdotes(response.data))
  } catch (error) {
    console.error('Error fetching anecdotes:', error)
  }
}
export const { setAnecdotes, addAnecdote, voteAnecdote, sortAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer
  

