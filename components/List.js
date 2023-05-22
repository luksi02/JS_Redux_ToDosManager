import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../redux/actions";

const List = ({ toggleTodo, removeTodo, removeTodo2s }) => {
    const todos = useSelector((state) => state.todos);
    // const dispatch = useDispatch();
    //
    // const handleRemove = (title) => {
    //     dispatch(removeTodo(title));
    // };

    return (
        <div>
            <h1>To-Do List:</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        onClick={() => toggleTodo(todo.title)}
                        style={{ textDecoration: todo.done ? "line-through" : "none" }}
                    >
                        <span>{todo}</span>
                        {/*<button onClick={() => handleRemove(todo)}>Remove</button>*/}
                        <button onClick={() => removeTodo(index)}>Remove</button>
                        <button onClick={() => removeTodo2s(index)}>Remove after 2s</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
