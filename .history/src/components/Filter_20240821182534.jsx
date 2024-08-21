const Filter = () => {
    const style = {
        marginBottom: 10
    }
    const handleChange = (event) => {
        debugger
        // input-field value is in variable event.target.value
      }
    return (
        <div style={style}>
            filter <input onChange={handleChange} name="filter"/>
        </div>
    )
}
export default Filter