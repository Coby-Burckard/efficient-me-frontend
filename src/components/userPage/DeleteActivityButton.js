import React from 'react'
import { startDeleteActivity } from '../../actions/activity'
import { useSelector, useDispatch } from 'react-redux'

const DeleteActivityButton = (props) => {

  const dispatch = useDispatch()
  
  const token = useSelector(state => state.user.user)

  const handleButtonClick = () => {
    dispatch(startDeleteActivity(token, props.id))
  }

  return (
    <>
      <button onClick={handleButtonClick}>Remove activity</button>
    </>
  )
}

export default DeleteActivityButton