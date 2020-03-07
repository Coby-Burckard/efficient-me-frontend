// object that will be added to userData reducer. This covers time actions

const timeSubReducer = {
  ADD_TIME: (state, { time }) => {
    state.entities.times[+time.id] = time
    state.entities.goals[+time.goal].timeallocation_set.push(+time.id) 
  },
  EDIT_TIME: (state, { time}) => {
    state.entities.times[+time.id] = time
  },
  DELETE_TIME: (state, { timeID, goalID}) => {
    delete state.entities.times[timeID]
    const list = state.entities.goals[goalID].timeallocation_set
    const newList = list.filter(ta => {
      return ta === timeID ? false : true
    })
    state.entities.goals[goalID].timeallocation_set = newList
  }
}

export default timeSubReducer