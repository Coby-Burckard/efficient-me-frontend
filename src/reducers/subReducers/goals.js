const goalSubReducer = {
  ADD_GOAL: (state, { goal }) => {
    state.entities.goals[+goal.id] = goal
    state.entities.activities[+goal.activity].goal_set.push(+goal.id)
  },
  EDIT_GOAL: (state, { goal }) => {
    state.entities.goals[+goal.id] = goal
  },
  DELETE_GOAL: (state, { id, activityID }) => {
    console.log(id, activityID)
    delete state.entities.goals[id]
    const list = state.entities.activities[activityID].goal_set
    const newList = list.filter(goal => {
      return goal === id ? false : true
    })
    state.entities.activities[activityID].goal_set = newList
  }
}

export default goalSubReducer