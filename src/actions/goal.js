import { fetchEditGoal, fetchAddGoal, fetchDeleteGoal } from '../ajaxOrLocal/goal'

const startAddGoal = (token, goal) => {
  return dispatch => {
    fetchAddGoal(token, goal)
      .then(response => {
        if (response.status !== 201) {
          throw new Error('Error adding goal to the db: ', response.status)
        }
        return response.json()
      })
      .then(responseJSON => dispatch(addGoal(responseJSON)));
  };
};

const addGoal = (goal) => {
  console.log(goal)
  return {
    type:'ADD_GOAL',
    goal
  }
}

const startEditGoal = (token, goal, id) => {
  return dispatch => {
    fetchEditGoal(token, goal, id)
      .then(response => {
        if (response.status !== 200){
          throw new Error('Error editing goal: ', response.status)
        }
        return response.json()
      })
      .then(responseJSON => dispatch(editGoal(responseJSON)))
  }
}

const editGoal = (goal) => ({
  type: 'EDIT_GOAL',
  goal
})

const startDeleteGoal = (token, goalID, activityID) => {
  return dispatch => {
    fetchDeleteGoal(token, goalID)
      .then(response => {
        console.log(response.status)
        if (response.status !== 204){
          throw new Error('Error deleting goal: ', response.status)
        }
        return dispatch(deleteGoal(goalID, activityID))
      })
  }
}

const deleteGoal = (goalID, activityID) => ({
  type: 'DELETE_GOAL',
  id: goalID,
  activityID
})

export { startAddGoal, startDeleteGoal, startEditGoal}