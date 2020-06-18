import React from "react";
import Board from "../../components/Board/Board.js";
import AddAndUpdate from "../../components/AddAndUpdate/AddAndUpdate.js";
import axios from "axios";

const instance = axios.create({
  baseURL: window.location.origin
});

const initalTaskState = {
  name: "",
  status: "ToDo",
  descrption: "",
};

class AciveSprint extends React.Component {
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

  componentDidMount = () => {
    instance
      .post(
        "localization/messages/v1/_search?module=rainmaker-common&locale=en_IN&tenantId=pb",
        {
          RequestInfo: {
            apiId: "Rainmaker",
            ver: ".01",
            ts: "",
            action: "_search",
            did: "1",
            key: "",
            msgId: "20170310130900|en_IN",
            authToken: "36e9fe62-39d5-4edc-b3f3-9679d88208c1",
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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

  handleChange = (key = "name", value = "login screen") => {
    const { task } = this.state;
    this.setState({
      task: {
        ...task,
        [key]: value,
      },
    });
  };

  render() {
    console.log("reder - n");

    // console.log(this);
    const { tasks = [], task = {}, status = [] } = this.state;
    const { addTask, handleChange } = this;

    return (
      <div className="App">
        <Board tasks={tasks} />
        <AddAndUpdate
          task={task}
          status={status}
          addTask={addTask}
          handleChange={handleChange}
        />
      </div>
    );
  }
}

export default AciveSprint;
