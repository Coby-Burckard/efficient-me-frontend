import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, set } from '../actions/counter'

const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.counter.count)

  const [value, setValue] = useState(0)

  const incrementClick = () => {
    dispatch(increment())
  }

  const setClick = () => {
    dispatch(set(value))
  }

  const onValueChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <p>The count is {count} </p>
      <button onClick={incrementClick}>+1</button>
      <input value={value} onChange={onValueChange} />
      <button onClick={setClick}>set</button>
    </div>
  )
}

export default Counter