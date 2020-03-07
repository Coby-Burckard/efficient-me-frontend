import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ActivityFrom = props => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState(props.title || "")
  const [description, setDescription] = useState(props.description || "")
  const token = useSelector(state => state.user.user)

  const onTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const onDescriptionChange = e => {
    setDescription(e.target.value)
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    const activity = {
      title,
      description,
      activity_type: [1]
    }
    dispatch(props.onSubmit(token, activity, props.id || null))
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" placeholder="title" value={title} onChange={onTitleChange} />
      <textarea placeholder="description" value={description} onChange={onDescriptionChange} />
      <button type="submit">Save Activity</button>
    </form>
  )
}

export default ActivityFrom