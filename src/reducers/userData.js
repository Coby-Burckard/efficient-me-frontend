import { createReducer } from "@reduxjs/toolkit";
import { normalize, schema } from "normalizr";
import timeSubReducer from "./subReducers/times";
import goalSubReducer from "./subReducers/goals";
import activitySubReducer from "./subReducers/activities";
import { buildHours } from "../selectors/goals";

const defaultState = {
  entities: {
    times: {},
    goals: {},
    activities: {},
  },
  errors: {
    activityError: false,
    goalError: false,
    timeError: false,
  },
};

const normalizeData = (data) => {
  let time, goal, activity;

  time = new schema.Entity("times", {
    goal: goal,
  });

  goal = new schema.Entity("goals", {
    activity: activity,
    timeallocation_set: [time],
  });

  activity = new schema.Entity("activities", {
    goal_set: [goal],
  });

  return normalize(data, [activity]);
};

const patchNormalizr = (data) => {
  if (!data.entities.times) {
    data.entities["times"] = {};
  }
  if (!data.entities.goals) {
    data.entities["goals"] = {};
  }
  if (!data.entities.activities) {
    data.entities["activities"] = {};
  }

  return data;
};

const userData = createReducer(defaultState, {
  LOAD_USER_DATA: (state, action) => {
    const userData = buildHours(action.userData);
    const normData = normalizeData(userData);
    const patchedData = patchNormalizr(normData);
    state.entities = patchedData.entities;
  },
  DELETE_DATA: (state, action) => {
    state.entities = {
      times: {},
      goals: {},
      activities: {},
    };
  },
  ...timeSubReducer,
  ...goalSubReducer,
  ...activitySubReducer,
});

export { userData as default };
