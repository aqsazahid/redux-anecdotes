import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from './reducers/anecdoteReducer'
const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
  const getId = () => (100000 * Math.random()).toFixed(0)
  const vote = (id) => {
    dispatch(voteAnecdote(id))
  }

  const addAnecdotes = (event) => {
    debugger
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    dispatch({
      type: 'NEW_NOTE',
      payload: {
        content,
        id: getId()
      }
    })
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdotes}>
        <div><input /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App