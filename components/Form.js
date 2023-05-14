import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const Form = ({ addTodo }) => {
  const [todoName, setTodoName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoName);
    setTodoName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="todoName"
        name="todoName"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button type="submit">Dodaj</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todoName) => dispatch(addTodo(todoName)),
});

export default connect(null, mapDispatchToProps)(Form);
