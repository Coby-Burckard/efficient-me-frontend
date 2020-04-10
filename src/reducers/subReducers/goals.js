import { updateHours } from "../generics";

const goalSubReducer = {
  ADD_GOAL: (state, { goal }) => {
    goal.complete_hours = 0;
    state.entities.goals[+goal.id] = goal;
    state.entities.activities[+goal.activity].goal_set.push(+goal.id);
    updateHours(state, "activity", goal.activity);
  },
  EDIT_GOAL: (state, { goal }) => {
    goal.timeallocation_set = goal.timeallocation_set.map((ta) => ta.id);
    goal.complete_hours = state.entities.goals[+goal.id].complete_hours;
    state.entities.goals[+goal.id] = goal;
    updateHours(state, "activity", goal.activity);
  },
  DELETE_GOAL: (state, { id, activityID }) => {
    delete state.entities.goals[id];
    const list = state.entities.activities[activityID].goal_set;
    const newList = list.filter((goal) => {
      return goal === id ? false : true;
    });
    state.entities.activities[activityID].goal_set = newList;
    updateHours(state, "activity", activityID);
  },
};

export default goalSubReducer;
