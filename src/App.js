import React from "react";
import Board from "./components/Board/Board.js";
import AddAndUpdate from "./components/AddAndUpdate/AddAndUpdate.js";
import "./App.css";

class App extends React.Component {
  state = {
    tasks: [
      {
        name: "Login screen",
        status: "ToDo",
        descrption: "google and face login",
      },
      {
        name: "Login screen-one",
        status: "ToDo",
        descrption: "google and face login",
      },

      {
        name: "Login screen-two",
        status: "ToDo",
        descrption: "google and face login",
      },
      {
        name: "Login api",
        status: "Pending",
        descrption: "google and face login",
      },
      {
        name: "Inital project structure",
        status: "Done",
        descrption: "react boiler plate",
      },
    ],
    task: {
      name: "",
      status: "ToDo",
      descrption: "",
    },
    status: [
      {
        code: "Todo",
      },
      {
        code: "Progress",
      },
      {
        code: "Done",
      },
    ],
  };

  // addTask=()=>{
  //
  // }

  render() {
    const { tasks = [], task = {}, status = [] } = this.state;
    // const {addTask}=this;

    return (
      <div className="App">
        <Board tasks={tasks} />
        <AddAndUpdate task={task} status={status} />
      </div>
    );
  }
}

export default App;
