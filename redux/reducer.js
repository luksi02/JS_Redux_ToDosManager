import { combineReducers } from "redux";

const initialState = [];

const initialListState = []

const todosReducer = (state = initialState, action) => {
  if (action.type === "ADD_TODO") {
    return [...state, action.payload];
  } else if (action.type === "TODO_TOGGLED") {
    return state.map((todo) =>
        todo.title === action.payload ? {...todo, done: !todo.done} : todo
    );
  }
  else if (action.type === "REMOVE_TODO") {
    const copy = [...state];
    copy.splice(action.index, 1)
    return copy
    }
    // else if (action.type === "REMOVE_TODO") {
    // const index = state.findIndex((todo) => todo.id !== action.payload.id);
    // if (index !== action.payload.id) {
    //   const copy = [...state];
    //   copy.splice(index, 1);
    //   return copy
    // }
    // copy.splice(action.index, 1);
    // return copy;
  // }
//   2023_06_12
// } else if (action.type === "REMOVE_TODO") {
//     const copy = [...state];
//     copy.splice(action.index, 1);
//     return copy;
//   }
  // else if (action.type === "REMOVE_TODO_2s") {
  //   dispatch(removeTodo2s())
  // }
  return state;
};

export default combineReducers({
  todos : todosReducer,
  // list,
});

// export default todosReducer;

