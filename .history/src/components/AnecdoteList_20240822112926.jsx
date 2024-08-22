import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote , sortAnecdotes} from '../reducers/anecdoteReducer'
const AnecdoteList = () => {
    const anecdotes = useSelector(({ anecdotes, filter }) => {
      return anecdotes.filter( anecdote =>   anecdote.content.toLowerCase().includes(filter.toLowerCase()))
    })
    const anecdotes = useSelector({ anecdotes})
    const dispatch = useDispatch()
    const handleVote = (id) => {
      dispatch(voteAnecdote(id))
      dispatch(sortAnecdotes())
    }
    return (
        <>
        {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={handleVote(anecdote.id)}>vote</button>
              </div>
            </div>
          )}
        </>
    )
}

export default AnecdoteList