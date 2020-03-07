import hostURL from './settings'

const fetchAddActivity = (token, activity) => {
  return fetch(`${hostURL}/api/activities/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${token}`
    },
    body: JSON.stringify(activity)})
}

const fetchEditActivity = (token, activity, id) => {
  return fetch(`${hostURL}/api/activities/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${token}`
    },
    body: JSON.stringify(activity)})
}

const fetchDeleteActivity = (token, id) => {
  return fetch(`${hostURL}/api/activities/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${token}`
    }})
}

export { fetchAddActivity, fetchEditActivity, fetchDeleteActivity }