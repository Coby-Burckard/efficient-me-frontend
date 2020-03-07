import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const GoalForm = (props) => {
  const token = useSelector(state => state.user.user)
  const dispatch = useDispatch()
  const [title, setTitle] = useState(props.title || "")
  const [description, setDescription] = useState(props.description || "")
  const [hoursRequired, setHoursRequired] = useState(props.hours_required || 0)
  const [date, setDate] = useState(props.date_completed || "")

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const handleHoursRequiredChange = (e) => {
    setHoursRequired(e.target.value)
  }

  const handleDateChange = (e) => {
    setDate(e.target.value)
  }


  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(props.activityID, date, hoursRequired)
    const goal = {
      title,
      description,
      hours_required: hoursRequired,
      deadline: date,
      activity: props.activityID 
    }
    dispatch(props.onSubmit(token, goal, props.activityID || null))
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input placeholder="title" type="text" value={title} onChange={handleTitleChange}/>
      <input placeholder="description" type="text" value={description} onChange={handleDescriptionChange}/> 
      <input placeholder="hours required" type="number" value={hoursRequired} onChange={handleHoursRequiredChange}/>
      <input type="date" value={date} onChange={handleDateChange} />
      <button>Save</button>
    </form>
  )
}

export default GoalForm