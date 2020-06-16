import React from "react";
import Board from "../../components/Board/Board.js";
import AddAndUpdate from "../../components/AddAndUpdate/AddAndUpdate.js";

const initalTaskState = {
  name: "",
  status: "ToDo",
  descrption: "",
};

class AciveSprint extends React.Component {
  state = {
    hasDrawerOpen:false,
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
    task: initalTaskState,
    status: [
      {
        code: "Todo",
      },
      {
        code: "Pending",
      },
      {
        code: "Done",
      },
    ],
  };

  toggeMenu=()=>{
    const {hasDrawerOpen}=this.state;
    this.setState({
      hasDrawerOpen:!hasDrawerOpen
    })
  }

  addTask = (task = {}) => {
    //import exiting tasks from state
    if (task.name && task.status && task.descrption) {
      let { tasks = [] } = this.state;
      //push new task
      tasks.push(task);
      //update state back
      this.setState({
        tasks,
        task: initalTaskState,
      });
    } else {
      alert("please enter required data");
    }
  };

  handleChangeName = (value) => {
    const { task } = this.state;
    this.setState({
      task: {
        ...task,
        name: value,
      },
    });
  };

  handleChangeStatus = (value) => {
    const { task } = this.state;
    this.setState({
      task: {
        ...task,
        status: value,
      },
    });
  };

  handleChangeDescription = (value) => {
    const { task } = this.state;
    this.setState({
      task: {
        ...task,
        descrption: value,
      },
    });
  };

  render() {
    console.log(this);
    const { tasks = [], task = {}, status = [] ,hasDrawerOpen} = this.state;
    const {
      addTask,
      handleChangeName,
      handleChangeStatus,
      handleChangeDescription,
      toggeMenu
    } = this;

    return (
      <div className="App">

        <Board tasks={tasks} />
        <AddAndUpdate
          task={task}
          status={status}
          addTask={addTask}
          handleChangeName={handleChangeName}
          handleChangeStatus={handleChangeStatus}
          handleChangeDescription={handleChangeDescription}
        />

      </div>
    );
  }
}

export default AciveSprint;
