import hostURL from "./settings";

const fetchAddTime = (token, time) => {
  return fetch(`${hostURL}/api/timeallocations/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    },
    body: JSON.stringify({
      title: `${time.title}`,
      description: `${time.description}`,
      goal: `${time.goalID}`,
      date_completed: `${time.dateTime}`,
      time_speant: `${time.hours}`
    })
  });
};

const fetchEditTime = (token, time) => {
  return fetch(`${hostURL}/api/timeallocations/${time.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    },
    body: JSON.stringify({
      title: `${time.title}`,
      description: `${time.description}`,
      goal: `${time.goalID}`,
      date_completed: `${time.dateTime}`,
      time_speant: `${time.hours}`
    })
  });
};

const fetchRemoveTime = (token, time) => {
  return fetch(`${hostURL}/api/timeallocations/${time.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    }
  });
};

export { fetchAddTime, fetchEditTime, fetchRemoveTime };
