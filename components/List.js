import React from "react";
import { useSelector } from "react-redux";

const List = ({ toggleTodo, remove }) => {
    const todos1 = useSelector((state) => state.todos);

    return (
        <div>
            <h1>To-Do List:</h1>
            <ul>
                {todos1.map((todo, index) => (
                    <li
                        key={index}
                        onClick={() => toggleTodo(todo.title)}
                        style={{ textDecoration: todo.done ? "line-through" : "none" }}
                    >
                        <span>{todo}4</span>
                        <button onClick={() => remove(todo.title)}>usun</button>
                        <button>usun po 2s</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
