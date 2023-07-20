Redux Todos Reducer Documentation

The following documentation provides an overview of the todosReducer function, which is a Redux reducer responsible for managing a list of todos. It utilizes the combineReducers function from the Redux library and handles various actions to modify the state.
Overview

The todosReducer function is a Redux reducer that handles actions related to managing a list of todos. It is part of a larger Redux state management setup and is combined with other reducers using combineReducers.
Initial State

The initial state for the todosReducer is an empty array [], representing an empty list of todos.
Actions

The todosReducer handles the following actions:

    ADD_TODO: Adds a new todo to the list.
    TODO_TOGGLED: Toggles the done property of a specific todo in the list.
    REMOVE_TODO: Removes a specific todo from the list.

Action Details

    ADD_TODO

    Action Type: "ADD_TODO"
    Action Payload: A new todo object to be added to the list.

When this action is dispatched, the reducer adds the new todo object to the existing list of todos using the spread operator. The updated state will contain the newly added todo at the end of the list.

    TODO_TOGGLED

    Action Type: "TODO_TOGGLED"
    Action Payload: The title of the todo to be toggled.

When this action is dispatched, the reducer searches for the todo with the matching title in the list. If found, it creates a new todo object with the done property inverted and replaces the old todo with the new one. If no matching todo is found, the state remains unchanged.

    REMOVE_TODO

    Action Type: "REMOVE_TODO"
    Action Payload: The index of the todo to be removed.

When this action is dispatched, the reducer creates a copy of the current state's todos array using the spread operator. It then removes the todo at the specified index and returns the updated copy as the new state.
Reducer Behavior

If none of the above actions match the dispatched action type, the reducer returns the current state unchanged. This ensures that the state remains consistent if an irrelevant action is dispatched.
Usage

To use the todosReducer in your Redux application, import it and combine it with other reducers using combineReducers from the Redux library. Here's an example of how to set it up:

javascript

// Import necessary libraries
import { combineReducers } from "redux";

// Define the initial state
const initialState = [];

// Define the todosReducer function

// Combine reducers using combineReducers
const rootReducer = combineReducers({
  todos: todosReducer,
  // Add other reducers here if needed
});

export default rootReducer;

With this setup, the todosReducer will handle actions related to todos, and its state will be available as state.todos in your Redux store.

Redux Todos Actions Documentation

The following documentation provides an overview of the actions related to managing todos in a Redux application. These actions are dispatched to interact with the todosReducer and modify the state accordingly.
Action Types

    ADD_TODO

    Action Type: ADD_TODO
    Description: Adds a new todo to the list.
    Payload: The name of the new todo to be added.

    TOGGLE_TODO

    Action Type: TOGGLE_TODO
    Description: Toggles the done property of a specific todo in the list.
    Payload: The title of the todo to be toggled.

    REMOVE_TODO

    Action Type: REMOVE_TODO
    Description: Removes a specific todo from the list.
    Payload: The index of the todo to be removed.

    REMOVE_TODO_2S

    Action Type: REMOVE_TODO_2S
    Description: Dispatches the REMOVE_TODO action after a delay of 2000 milliseconds (2 seconds).
    Payload: None.

Action Creators

    addTodo

    Description: Action creator function to add a new todo to the list.
    Parameters:
        todoName (String): The name of the new todo.
    Returns: An action object with type set to ADD_TODO and a payload containing the todoName.

Example Usage:

javascript

import { ADD_TODO } from "./actionTypes";

const addTodo = (todoName) => {
  return {
    type: ADD_TODO,
    payload: todoName,
  };
};

    toggle

    Description: Action creator function to toggle the done property of a specific todo.
    Parameters:
        title (String): The title of the todo to be toggled.
    Returns: An action object with type set to TOGGLE_TODO and a payload containing the title.

Example Usage:

javascript

import { TOGGLE_TODO } from "./actionTypes";

const toggle = (title) => ({
  type: TOGGLE_TODO,
  payload: title,
});

    removeTodo

    Description: Action creator function to remove a specific todo from the list.
    Parameters:
        index (Number): The index of the todo to be removed.
    Returns: An action object with type set to REMOVE_TODO and an index property containing the index of the todo to be removed.

Example Usage:

javascript

import { REMOVE_TODO } from "./actionTypes";

const removeTodo = (index) => ({
  type: REMOVE_TODO,
  index,
});

    removeTodo2s

    Description: Action creator function that dispatches the REMOVE_TODO action after a delay of 2000 milliseconds (2 seconds).
    Parameters:
        title (String): The title of the todo to be removed.
        dispatch (Function): The dispatch function from the Redux store.
    Returns: None.

Example Usage:

javascript

import { REMOVE_TODO_2S } from "./actionTypes";

const removeTodo2s = (title, dispatch) => {
  const id = setTimeout(() => {
    dispatch(removeTodo(title));
  }, 2000);
};
