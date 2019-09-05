import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import { bindActionCreators } from "redux";

function CreateTodo(props) {
  const [todoText, setTodoText] = useState("");
  const [todoTextError, setTodoTextError] = useState("");

  const onChangeTodoText = e => {
    setTodoText(e.target.value);
    setTodoTextError("");
  };

  const handleClickTodo = text => {
    if (text.length === 0) {
      setTodoTextError("Please enter the Todo.");
    } else {
      props.addTodo(text);
      setTodoText("");
    }
  };

  return (
    <div className="form-group row">
      <h2
        className="col-sm-10"
        style={{
          marginBottom: "50px",
          textAlign: "center",
          fontWeight: "bold"
        }}
      >
        TODO APP
      </h2>
      <div className="col-sm-10">
        <input
          onChange={onChangeTodoText}
          value={todoText}
          type="text"
          className="form-control"
          id="inputEmail3"
          placeholder="Add Todo"
        />
        <p style={{ color: "red", padding: "10px" }}>{todoTextError}</p>
        <button
          type="button"
          onClick={() => setTodoText("")}
          style={{ marginTop: "25px", marginRight: "15px" }}
          className="btn btn-danger"
        >
          Cancel
        </button>
        <button
          type="button"
          style={{ marginTop: "25px" }}
          className="btn btn-success"
          onClick={() => handleClickTodo(todoText)}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addTodo
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(CreateTodo);
