import React from 'react'
import useHistory from 'react-router-dom'

const CreateUserButton = () => {
  const history = useHistory()
  
  const onClick = (e) => {
    history.push('/create')
  }

  return (
    <button onClick={onClick}>Get Started</button>
  )
}