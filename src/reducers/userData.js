import { createReducer } from "@reduxjs/toolkit";
import { normalize, schema } from 'normalizr'

const defaultState = {
  entities: {
    times: [],
    goals: [],
    activities: []
  }
};

const normalizeData = (data) => {
  let time, goal, activity

  time = new schema.Entity('times', {
    goal: goal
  });
  
  goal = new schema.Entity('goals', {
    activity: activity,
    timeallocation_set: [time]
  })
    
  activity = new schema.Entity('activities', {
    goal_set: [goal]
  })
    
  return normalize(data, [activity])
}

const userData = createReducer(defaultState, {
  LOAD_USER_DATA: (state, action) => {
    const normData = normalizeData(action.userData)
    state.entities = normData.entities;
  }
});

export { userData as default };

