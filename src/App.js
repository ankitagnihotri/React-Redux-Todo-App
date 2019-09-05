import React from "react";
import CreateTodo from "./components/CreateTodo";
import ShowTodo from "./components/ShowTodo";

function App() {
  return (
    <div className="App">
      <div className="container" style={{ marginTop: "80px" }}>
        <div className="row">
          <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
            <CreateTodo />
          </div>
          <ShowTodo />
        </div>
      </div>
    </div>
  );
}

export default App;
