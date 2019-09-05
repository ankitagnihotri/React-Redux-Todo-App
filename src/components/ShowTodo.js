import React from "react";
import { connect } from "react-redux";
import { deleteTodo, toggleTodo, setVisibilityFilter } from "./../actions";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from "./../actions/actionTypes";
import { bindActionCreators } from "redux";

function ShowTodo(props) {
  return (
    <div className="col-lg-10 offset-lg-1 col-md-10 col-sm-12 col-xs-12">
      <nav style={{ marginTop: "60px" }}>
        <ol className="breadcrumb">
          <li
            className={
              "breadcrumb-item " +
              (props.visibilityFilter === SHOW_ALL ? "active" : "")
            }
            onClick={() => props.setVisibilityFilter(SHOW_ALL)}
          >
            All
          </li>
          <li
            className={
              "breadcrumb-item " +
              (props.visibilityFilter === SHOW_COMPLETED ? "active" : "")
            }
            onClick={() => props.setVisibilityFilter(SHOW_COMPLETED)}
          >
            Completed
          </li>
          <li
            className={
              "breadcrumb-item " +
              (props.visibilityFilter === SHOW_ACTIVE ? "active" : "")
            }
            onClick={() => props.setVisibilityFilter(SHOW_ACTIVE)}
          >
            Active
          </li>
        </ol>
      </nav>
      {props.todos.length !== 0 ? (
        <table
          style={{ marginTop: "60px" }}
          className="table table-hover table-light"
        >
          <thead>
            <tr>
              <th scope="col">Todos</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.todos.map(todo => (
              <tr key={todo.id}>
                <td
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none"
                  }}
                >
                  {todo.text} {todo.completed === true ? "(completed)" : ""}
                </td>
                <td>
                  <span
                    className="fas fa-minus-circle"
                    onClick={() => props.deleteTodo(todo.id)}
                    style={{
                      color: "red",
                      fontSize: "20pt",
                      marginRight: "20px"
                    }}
                  />
                  <span
                    className="fas fa-check-circle"
                    onClick={() => props.toggleTodo(todo.id)}
                    style={{ color: "green", fontSize: "20pt" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div
          style={{ marginTop: "50px" }}
          className="col-lg-10 col-md-10 col-xs-12 col-sm-12 offset-lg-1"
        >
          <div className="alert alert-danger" role="alert">
            Todo List is empty or Filter results not available.
          </div>
        </div>
      )}
    </div>
  );
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteTodo,
      toggleTodo,
      setVisibilityFilter
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowTodo);
