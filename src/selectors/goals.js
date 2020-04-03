const selectByKey = (fullObject, keysToMatch, hoursFlag) => {
  if (!fullObject) {
    return [];
  }
  return Object.values(fullObject).filter(value => {
    if (keysToMatch.includes(+value.id)) {
      return true;
    } else {
      return false;
    }
  });
};

const buildHours = userData => {
  // takes in the nested userData and adds hours to each activity/goal

  userData.forEach(activity => {
    let activityTotalHours = 0;
    let activityCompleteHours = 0;

    const goals = activity["goal_set"];

    goals.forEach(goal => {
      let goalHours = 0;

      activityTotalHours += goal["hours_required"];

      const times = goal["timeallocation_set"];

      times.forEach(time => {
        const timeSpent = time["time_speant"];
        goalHours += timeSpent;
      });

      goal["complete_hours"] = goalHours;
      activityCompleteHours += goalHours;
    });

    activity["total_hours"] = activityTotalHours;
    activity["complete_hours"] = activityCompleteHours;
  });

  return userData;
};

export { selectByKey, buildHours };
