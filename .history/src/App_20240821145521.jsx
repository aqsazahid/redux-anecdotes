// import { useSelector, useDispatch } from 'react-redux'
// import { voteAnecdote } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
const App = () => {
  // const anecdotes = useSelector(state => state)
  // const dispatch = useDispatch()
  // const vote = (id) => {
  //   dispatch(voteAnecdote(id))
  // }

  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)

  return (
    <div>
      <h2>Anecdotes</h2>
      {/* {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )} */}
      <AnecdoteList sortedAnecdotes ={sortedAnecdotes}/>
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  )
}

export default App