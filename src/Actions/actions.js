const loadData = (url, actionType) => dispatch => {
  fetch(url)
  .then(res => res.json())
  .then(res => dispatch({type: actionType, payload: res}))
  .catch(err => console.log(err))
}

export default loadData;