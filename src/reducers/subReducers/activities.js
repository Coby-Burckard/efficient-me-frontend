const activitySubReducer = {
  ADD_ACTIVITY: (state, { activity }) => {
    activity.complete_hours = 0;
    activity.total_hours = 0;
    state.entities.activities[+activity.id] = activity;
  },
  EDIT_ACTIVITY: (state, { activity }) => {
    activity.complete_hours =
      state.entities.activities[activity.id].complete_hours;
    activity.total_hours = state.entities.activities[activity.id].total_hours;
    activity.goal_set = activity.goal_set.map((goal) => goal.id);
    state.entities.activities[+activity.id] = activity;
  },
  DELETE_ACTIVITY: (state, { id }) => {
    delete state.entities.activities[id];
  },
};

export default activitySubReducer;
