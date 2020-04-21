import { createReducer } from "@reduxjs/toolkit";

const defaultState = {
  addTime: false,
  editTime: false,
  addGoal: false,
  editGoal: false,
  addActvitiy: false,
  editActivity: false,
};

const modalControl = createReducer(defaultState, {
  SET_ADD_TIME: (state, action) => {
    state.addTime = action.isOpen;
  },
  SET_EDIT_TIME: (state, action) => {
    state.editTime = action.isOpen;
  },
  SET_ADD_GOAL: (state, action) => {
    state.addGoal = action.isOpen;
  },
  SET_EDIT_GOAL: (state, action) => {
    state.editGoal = action.isOpen;
  },
  SET_ADD_ACTIVITY: (state, action) => {
    state.addActivity = action.isOpen;
  },
  SET_EDIT_ACTIVITY: (state, action) => {
    state.editActivity = action.isOpen;
  },
});

export default modalControl;
