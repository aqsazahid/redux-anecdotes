import { useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'
const Filter = () => {
    const dispatch = useDispatch()
    const style = {
        marginBottom: 10
    }
    const handleChange = (event) => {
        debugger
        dispatch(setFilter(event.target.value))
      }
    return (
        <div style={style}>
            filter <input onChange={handleChange} name="filter"/>
        </div>
    )
}
export default Filter