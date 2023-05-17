import { combineReducers } from "redux";

const initialState = [];

const initialListState = []

// const list = (initialListState, action) => {
//   if (action.type === "REMOVE_TODO") {
//
//   }
// }

const todosReducer = (state = initialState, action) => {
  if (action.type === "ADD_TODO") {
    return [...state, action.payload];
  } else if (action.type === "TODO_TOGGLED") {
    return state.map((todo) =>
        todo.title === action.payload ? {...todo, done: !todo.done} : todo
    );
  } else if (action.type === "REMOVE_TODO") {
    const copy = [...state];
    copy.splice(action.index, 1);
    return copy;
  }
  return state;
};

  // stare rozwiazanie
  //
  //   return state.filter((todo) => todo.title !== action.payload);
  // }
//
//   return state;
// };

export default combineReducers({
  todos : todosReducer,
  // list,
});

// export default todosReducer;
