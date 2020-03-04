import React from 'react'
import { startDeleteTime } from '../../actions/time'
import { useSelector, useDispatch } from 'react-redux'

const DeleteTimeButton = (props) => {

  const dispatch = useDispatch()
  
  const token = useSelector(state => state.user.user)

  const handleButtonClick = () => {
    dispatch(startDeleteTime(token, props.id, props.goalID))
  }

  return (
    <>
      <button onClick={handleButtonClick}>Remove</button>
    </>
  )
}

export default DeleteTimeButton