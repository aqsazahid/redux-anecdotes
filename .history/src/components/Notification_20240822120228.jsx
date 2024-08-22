import { useSelector } from 'react-redux'
const Notification = () => {
  const notification = useSelector(state => state.notification)
  console.log("notification" + notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    color: '#000000'
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification