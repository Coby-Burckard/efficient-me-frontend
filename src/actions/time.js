import {
  fetchAddTime,
  fetchEditTime,
  fetchDeleteTime,
} from "../ajaxOrLocal/time";

const startAddTime = (token, time) => {
  return (dispatch) => {
    fetchAddTime(token, time)
      .then((response) => {
        if (response.status !== 201) {
          return new Promise((resolve, reject) => {
            reject();
          });
        }
        return response.json();
      })
      .then((responseJSON) => {
        dispatch(addTime(responseJSON));
        dispatch(setAddTimeModal(false));
        dispatch(timeFormError(false));
      });
  };
};

const addTime = (time) => ({
  type: "ADD_TIME",
  time,
});

const startEditTime = (token, time, id) => {
  return (dispatch) => {
    fetchEditTime(token, time, id)
      .then((response) => {
        if (response.status !== 200) {
          return new Promise((resolve, reject) => {
            reject();
          });
        }
        return response.json();
      })
      .then((responseJSON) => {
        dispatch(editTime(responseJSON));
        dispatch(setEditTimeModal(false));
        dispatch(timeFormError(false));
      })
      .catch(() => {
        dispatch(timeFormError("ERROR - please check inputs"));
      });
  };
};

const setAddTimeModal = (isOpen) => ({
  type: "SET_ADD_TIME",
  isOpen,
});

const setEditTimeModal = (isOpen) => ({
  type: "SET_EDIT_TIME",
  isOpen,
});

const editTime = (time) => ({
  type: "EDIT_TIME",
  time,
});

const startDeleteTime = (token, timeID, goalID) => {
  return (dispatch) => {
    fetchDeleteTime(token, timeID).then((response) => {
      console.log(response.status);
      if (response.status !== 204) {
        throw new Error("Error deleting time: ", response.status);
      }
      return dispatch(deleteTime(timeID, goalID));
    });
  };
};

const deleteTime = (timeID, goalID) => ({
  type: "DELETE_TIME",
  timeID,
  goalID,
});

const timeFormError = (error) => ({
  type: "TIME_ERROR",
  error,
});

export {
  startAddTime,
  startEditTime,
  startDeleteTime,
  timeFormError,
  setEditTimeModal,
  setAddTimeModal,
};
