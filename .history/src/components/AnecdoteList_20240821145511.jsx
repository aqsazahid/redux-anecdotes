
const AnecdoteList = (sortedAnecdotes) => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()
    const vote = (id) => {
        dispatch(voteAnecdote(id))
    }
    return (
        {sortedAnecdotes.map(anecdote =>
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
    )
}

export default AnecdoteList