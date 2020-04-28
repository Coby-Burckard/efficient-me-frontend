import {
  fetchEditGoal,
  fetchAddGoal,
  fetchDeleteGoal,
} from "../ajaxOrLocal/goal";

const startAddGoal = (token, goal) => {
  return (dispatch) => {
    fetchAddGoal(token, goal)
      .then((response) => {
        if (response.status !== 201) {
          return Promise.reject();
        }
        return response.json();
      })
      .then((responseJSON) => {
        dispatch(addGoal(responseJSON));
        dispatch(setAddGoalModal(false));
        dispatch(goalFormError(false));
      })
      .catch(() => {
        dispatch(goalFormError("Error: please check inputs"));
      });
  };
};

const addGoal = (goal) => {
  console.log(goal);
  return {
    type: "ADD_GOAL",
    goal,
  };
};

const startEditGoal = (token, goal, id) => {
  return (dispatch) => {
    fetchEditGoal(token, goal, id)
      .then((response) => {
        if (response.status !== 200) {
          return new Promise((resolve, reject) => {
            reject();
          });
        }
        return response.json();
      })
      .then((responseJSON) => {
        dispatch(editGoal(responseJSON));
        dispatch(setEditGoalModal(false));
        dispatch(goalFormError(false));
      })
      .catch(() => {
        dispatch(goalFormError("Error: please check inputs"));
      });
  };
};

const editGoal = (goal) => ({
  type: "EDIT_GOAL",
  goal,
});

const startDeleteGoal = (token, goalID, activityID) => {
  return (dispatch) => {
    fetchDeleteGoal(token, goalID).then((response) => {
      console.log(response.status);
      if (response.status !== 204) {
        throw new Error("Error deleting goal: ", response.status);
      }
      console.log("deleting");
      return dispatch(deleteGoal(goalID, activityID));
    });
  };
};

const deleteGoal = (goalID, activityID) => ({
  type: "DELETE_GOAL",
  id: goalID,
  activityID,
});

const goalFormError = () => ({
  type: "GOAL_ERROR",
  error: "Unable to process request - please check inputs",
});

const setAddGoalModal = (isOpen) => ({
  type: "SET_ADD_GOAL",
  isOpen,
});

const setEditGoalModal = (isOpen) => ({
  type: "SET_EDIT_GOAL",
  isOpen,
});

export {
  startAddGoal,
  startDeleteGoal,
  startEditGoal,
  goalFormError,
  setAddGoalModal,
  setEditGoalModal,
};
