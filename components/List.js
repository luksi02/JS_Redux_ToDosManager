import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../redux/actions";

const List = ({ toggleTodo, removeTodo, removeTodo2s }) => {
    const todos = useSelector((state) => state.todos);

    return (
        <div>
            <h1>To-Do List:</h1>
            <ul>
                {todos.map((todo, index, li) => (
                    <li
                        key={todo.id}                        
                        style={{ textDecoration: todo.done ? "line-through" : "none" }}
                    >
                        <span onClick={() => toggleTodo(todo.title)}>{todo}</span>                      
                        <button onClick={() => removeTodo(index)} key={todo.id}>Remove</button>
                        <button onClick={() => removeTodo2s(index)} key={todo.id}>Remove after 2s</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
