import axiosWithAuth from "../utils/axiosWithAuth";

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getTodo = () => (dispatch) => {
  dispatch({ type: START_FETCHING });

  axios
    .get("")
    .then((res) => {
      console.log(res);

      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_FAIL, payload: err.response });
    });
};

export const ADD_FETCHING = "ADD_FETCHING";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAIL = "ADD_FAIL";

export const addTodo = (newTodo) => (dispatch) => {
  dispatch({ type: ADD_FETCHING });

  axiosWithAuth()
    .post("")
    .then((res) => {
      console.log(res);

      dispatch({ type: ADD_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ADD_FAIL, payload: err.response });
    });
};