import { createReducer } from "@reduxjs/toolkit";

const defaultState = {
  activities: []
};

const userData = createReducer(defaultState, {
  LOAD_USER_DATA: (state, action) => {
    state.activities = action.userData;
  }
});

export { userData as default };
