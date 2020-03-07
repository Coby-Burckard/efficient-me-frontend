import {
  fetchAddTime,
  fetchEditTime,
  fetchDeleteTime
} from "../ajaxOrLocal/time";

const startAddTime = (token, time) => {
  return dispatch => {
    fetchAddTime(token, time)
      .then(response => {
        if (response.status !== 201) {
          throw new Error('Error adding time to the db: ', response.status)
        }
        return response.json()
      })
      .then(responseJSON => dispatch(addTime(responseJSON)));
  };
};

const addTime = time => ({
  type: "ADD_TIME",
  time
});

const startEditTime = (token, time, id) => {
  return dispatch => {
    fetchEditTime(token, time, id)
      .then(response => {
        if (response.status !== 200){
          throw new Error('Error editing time: ', response.status)
        }
        return response.json()
      })
      .then(responseJSON => dispatch(editTime(responseJSON)))
  }
}

const editTime = (time) => ({
  type: 'EDIT_TIME',
  time
})

const startDeleteTime = (token, timeID, goalID) => {
  return dispatch => {
    fetchDeleteTime(token, timeID)
      .then(response => {
        console.log(response.status)
        if (response.status !== 204){
          throw new Error('Error deleting time: ', response.status)
        }
        return dispatch(deleteTime(timeID, goalID))
      })
  }
}

const deleteTime = (timeID, goalID) => ({
  type: 'DELETE_TIME',
  timeID,
  goalID
})

export { startAddTime, startEditTime, startDeleteTime };
