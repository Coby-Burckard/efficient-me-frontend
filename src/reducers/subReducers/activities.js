const activitySubReducer = {
  ADD_ACTIVITY: (state, { activity }) => {
    state.entities.activities[+activity.id] = activity
  },
  EDIT_ACTIVITY: (state, { activity }) => {
    state.entities.activities[+activity.id] = activity
  },
  DELETE_ACTIVITY: (state, { id }) => {
    delete state.entities.activities[id]
  }
}

export default activitySubReducer