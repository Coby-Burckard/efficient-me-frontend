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
          return new Promise((resolve, reject) => {
            reject();
          });
        }
        return response.json();
      })
      .then((responseJSON) => {
        dispatch(addActivity(responseJSON));
        dispatch(setAddActivityModal(false));
        dispatch(activityFormError(false));
      })
      .catch(() => {
        dispatch(activityFormError("Error: Please check inputs"));
      });
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
          return new Promise((resolve, reject) => {
            reject();
          });
        }
        return response.json();
      })
      .then((responseJSON) => {
        dispatch(editActivity(responseJSON));
        dispatch(setEditActivityModal(false));
        dispatch(activityFormError(false));
      })
      .catch(() => {
        dispatch(activityFormError("Error: please check inputs"));
      });
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
  error,
});

const setAddActivityModal = (isOpen) => ({
  type: "SET_ADD_ACTIVITY",
  isOpen,
});

const setEditActivityModal = (isOpen) => ({
  type: "SET_EDIT_ACTIVITY",
  isOpen,
});

export {
  startAddActivity,
  startEditActivity,
  startDeleteActivity,
  activityFormError,
  setAddActivityModal,
  setEditActivityModal,
};
