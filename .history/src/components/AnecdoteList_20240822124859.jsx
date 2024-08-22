import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote , sortAnecdotes} from '../reducers/anecdoteReducer'
import {showNotification } from '../reducers/ notificationReducer'
const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return anecdotes.filter(anecdote =>
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
    )
  })
    const dispatch = useDispatch()
    const handleVote = (id, content) => {
      dispatch(voteAnecdote(id))
      dispatch(sortAnecdotes())
      dispatch(showNotification(`You voted '${content}'`, 5))
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
                <button onClick={() => handleVote(anecdote.id, anecdote.content)}>vote</button>
              </div>
            </div>
          )}
        </>
    )
}

export default AnecdoteList