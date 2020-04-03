import hostURL from "./settings";

const fetchAddGoal = (token, goal) => {
  return fetch(`${hostURL}/api/goals/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    },
    body: JSON.stringify({
      title: `${goal.title}`,
      description: `${goal.description}`,
      activity: `${goal.activity}`,
      deadline: `${goal.deadline}`,
      hours_required: `${goal.hours_required}`
    })
  });
};

const fetchEditGoal = (token, goal, id) => {
  return fetch(`${hostURL}/api/goals/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    },
    body: JSON.stringify({
      ...goal
    })
  });
};

const fetchDeleteGoal = (token, id) => {
  return fetch(`${hostURL}/api/goals/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    }
  });
};

export { fetchEditGoal, fetchAddGoal, fetchDeleteGoal };
