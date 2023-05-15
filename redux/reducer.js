import { combineReducers } from "redux";

const initialState = {
  todos: []
}

const todosReducer = (state = initialState, action) => {
  if (action.type === "ADD_TODO") {
    return {
      ...state,
      todos: [...state.todos, action.payload],
    };
  } else if (action.type === "TODO_TOGGLED") {
    return {
      ...state,
      todos: state.todos.map((todo) =>
        todo.title === action.payload ? { ...todo, done: !todo.done } : todo
      ),
    };
  } else if (action.type === "REMOVE_TODO") {
    return {
      ...state,
      todos: state.todos.filter((todo) => todo.title !== action.payload),
    };
  }
  
  return state;
};

export default combineReducers({
  todos :todosReducer,
  // list,
});

// export default todosReducer;

