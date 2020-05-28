import {
  START_FETCHING,
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADD_FETCHING,
  ADD_SUCCESS,
  ADD_FAIL,
  TOGGLE_TODO,
} from "../actions/actions";

const initState = {
  isFetching: false,
  err: "",
  todos: [],
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
        todos: action.payload,
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
        todos: [action.payload],
      };
    case ADD_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case TOGGLE_TODO:
      const toggleTodos = state.todos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
      return { todos: toggleTodos };
    default:
      return state;
  }
};

export default reducer;
