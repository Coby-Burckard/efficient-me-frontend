import { updateHours } from "../generics";

// object that will be added to userData reducer. This covers time actions

const timeSubReducer = {
  ADD_TIME: (state, { time }) => {
    state.entities.times[+time.id] = time;
    state.entities.goals[+time.goal].timeallocation_set.push(+time.id);
    updateHours(state, "goal", time.goal);
  },
  EDIT_TIME: (state, { time }) => {
    state.entities.times[+time.id] = time;
    updateHours(state, "goal", time.goal);
  },
  DELETE_TIME: (state, { timeID, goalID }) => {
    console.log("deleting time from goal: ", goalID);
    delete state.entities.times[timeID];
    const list = state.entities.goals[+goalID].timeallocation_set;
    const newList = list.filter((ta) => {
      return ta === timeID ? false : true;
    });
    state.entities.goals[goalID].timeallocation_set = newList;
    updateHours(state, "goal", goalID);
  },
  TIME_ERROR: (state, { error }) => {
    state.errors.timeError = error;
  },
};

export default timeSubReducer;
