import hostURL from "./settings";

const fetchAddTime = (token, time) => {
  return fetch(`${hostURL}/api/timeallocations/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    },
    body: JSON.stringify({
      title: time.title,
      description: time.description, 
      goal: time.goal,
      date_completed: time.date_completed,
      time_speant: time.time_speant
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
      title: time.title,
      description: time.description, 
      goal: time.goal,
      date_completed: time.date_completed,
      time_speant: time.time_speant
    })
  });
};

const fetchDeleteTime = (token, time) => {
  return fetch(`${hostURL}/api/timeallocations/${time}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    }
  });
};

export { fetchAddTime, fetchEditTime, fetchDeleteTime };
