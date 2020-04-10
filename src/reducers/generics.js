const updateHours = (state, entityType, id) => {
  //takes in a time, goal, or activity that has been modified, and updates the completed and totally hours in its tree
  switch (entityType) {
    case "activity":
      updateActivityHours(state, id);
      break;
    case "goal":
      updateGoalHours(state, id);
      break;
    default:
      console.log("incorrect entity type recieved in update hours");
  }
};

function updateActivityHours(state, activityID) {
  const goalSetIDs = state.entities.activities[activityID]["goal_set"];

  //pulls an array of [completed hours, total hours required] for all of the goals listed
  const hours = goalSetIDs.reduce(
    (hours, goalSetID) => {
      const completedHours = state.entities.goals[goalSetID]["complete_hours"];
      const totalHours = state.entities.goals[goalSetID]["hours_required"];
      hours[0] = hours[0] + completedHours;
      hours[1] = hours[1] + totalHours;
      return hours;
    },
    [0, 0]
  );

  console.log("completed hours for activity ", activityID, " are ", hours[0]);
  //modifying the state
  state.entities.activities[activityID]["total_hours"] = hours[1] || 0;
  state.entities.activities[activityID]["complete_hours"] = hours[0] || 0;
}

function updateGoalHours(state, goalID) {
  const timeIDsSet = state.entities.goals[goalID]["timeallocation_set"];

  const hours = timeIDsSet.reduce((hours, timeID) => {
    const completedTime = state.entities.times[timeID]["time_speant"];
    return hours + completedTime;
  }, 0);

  //modifying the state
  state.entities.goals[goalID]["complete_hours"] = hours || 0;

  //updating the corresponding activity
  const activityID = state.entities.goals[goalID].activity;
  updateActivityHours(state, activityID);
}

export { updateHours };
