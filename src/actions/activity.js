import {
  fetchAddActivity,
  fetchEditActivity,
  fetchDeleteActivity,
} from "../ajaxOrLocal/activity";

const startAddActivity = (token, activity) => {
  return (dispatch) => {
    fetchAddActivity(token, activity)
      .then((response) => {
        if (response.status !== 201) {
          throw new Error("Error adding activity to the db: ", response.status);
        }
        return response.json();
      })
      .then((responseJSON) => dispatch(addActivity(responseJSON)));
  };
};

const addActivity = (activity) => ({
  type: "ADD_ACTIVITY",
  activity,
});

const startEditActivity = (token, activity, id) => {
  return (dispatch) => {
    fetchEditActivity(token, activity, id)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Error editing activity: ", response.status);
        }
        return response.json();
      })
      .then((responseJSON) => dispatch(editActivity(responseJSON)));
  };
};

const editActivity = (activity) => ({
  type: "EDIT_ACTIVITY",
  activity,
});

const startDeleteActivity = (token, activityID) => {
  return (dispatch) => {
    fetchDeleteActivity(token, activityID).then((response) => {
      console.log(response.status);
      if (response.status !== 204) {
        throw new Error("Error deleting time: ", response.status);
      }
      return dispatch(deleteActivity(activityID));
    });
  };
};

const deleteActivity = (id) => ({
  type: "DELETE_ACTIVITY",
  id,
});

const activityFormError = (error) => ({
  type: "ACTIVITY_ERROR",
  error: "Unable to process request - please check all inputs",
});

export {
  startAddActivity,
  startEditActivity,
  startDeleteActivity,
  activityFormError,
};
