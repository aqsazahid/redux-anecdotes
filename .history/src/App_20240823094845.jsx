import React ,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import fetchAnecdotes from'./reducers/anecdoteReducer
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAnecdotes())
  }, [dispatch])
  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  )
}

export default App