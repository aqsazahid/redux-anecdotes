import { useDispatch } from 'react-redux'
import anecdotes from '../reducers/anecdotes'
import showNotification from '../reducers/notificationReducer'
const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addAnecdotes = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(anecdotes(content))
        dispatch(showNotification(`You created '${content}'`, 5))
    }
    return (
        <form onSubmit={addAnecdotes}>
            <div><input name="anecdote" /></div>
            <button type='submit'>create</button>
        </form>
    )
}

export default AnecdoteForm