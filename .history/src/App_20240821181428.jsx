import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <h1>filter <input name="filter" onChange={() => dispatch()}/></h1>
      <Filter />
      <AnecdoteList />
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  )
}

export default App