import {
  START_FETCHING,
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADD_FETCHING,
  ADD_SUCCESS,
  ADD_FAIL,
} from "../actions/actions";

const initState = {
  isFetching: false,
  err: "",
  newTodo: [
    {
      taskName: "",
      taskDescription: "",
      recurring: false,
      completed: false,
      expired: false,
    },
  ],
};

const reducer = (state = initState, action) => {
  console.log(state);

  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        err: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        err: "",
        newTodo: action.payload,
      };
    case FETCH_FAIL:
      return {
        ...state,
        err: action.payload,
        isFetching: false,
      };
    case ADD_FETCHING:
      return {
        ...state,
      };
    case ADD_SUCCESS:
      return {
        ...state,
        newTodo: [action.payload],
      };
    case ADD_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        newTodo: state.newTodo.map((item) => {
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item;
        }),
      };
    default:
      return state;
  }
};
