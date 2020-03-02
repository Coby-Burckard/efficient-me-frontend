import {
  fetchAddTime,
  fetchEditTime,
  fetchRemoveTime
} from "../ajaxOrLocal/time";

const startAddTime = (token, time) => {
  return dispatch => {
    fetchAddTime(token, time)
      .then(response => response.json())
      .then(responseJSON => dispatch(addTime(time)));
  };
};

const addTime = time => ({
  type: "ADD_TIME",
  time
});

export { addTime };
