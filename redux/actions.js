export const ADD_TODO = "ADD_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const REMOVE_TODO_2S = "REMOVE_TODO_2S"

// export const REMOVE_TODO_2S = "REMOVE_TODO_2S"

// export const addTodo = (todoName) => {
//     return {
//         type: ADD_TODO,
//         payload: todoName,
//     };
// };

export const addTodo = (todoName) => {
    return {
        type: ADD_TODO,
        payload: todoName,
    };
};


export const toggle = (title) => ({
    type: TOGGLE_TODO,
    payload: title,
})

export const removeTodo = (title) => ({
    type: REMOVE_TODO,
    payload: title,
})

export const removeTodo2s = (title, dispatch) => {
    const id = setInterval(() =>{
        dispatch(removeTodo(title));
    }, 2000);

}

