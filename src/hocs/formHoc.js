import React from "react";
import { initalTaskState } from "../utils/constants.js";
import { connect } from "react-redux";
import  {add_task,handle_change} from "../redux/actions/app";

const formHoc = (Component) => {
  class FormHOCComponent extends React.Component {
    addTask = (task = {}) => {
      const {add_task}=this.props;
      //import exiting tasks from state
      if (task.name && task.status && task.descrption) {
        // let { tasks = [] } = this.state;
        // //push new task
        // tasks.push(task);
        //update state back
        // this.setState({
        //   tasks,
        //   task: initalTaskState,
        // });
        add_task(task)
      } else {
        alert("please enter required data");
      }
    };

    handleChange = (key = "name", value = "login screen") => {
      // const { task } = this.props;
      // this.setState({
      //   task: {
      //     ...task,
      //     [key]: value,
      //   },
      // });
      this.props.handle_change(key,value);
    };

    render() {
      const { tasks, task, sprints, sprint, status } = this.props;
      const {handleChange,addTask}=this;
      return (
        <Component
          tasks={tasks}
          task={task}
          sprints={sprints}
          sprint={sprint}
          status={status}
          handleChange={handleChange}
          addTask={addTask}
          {...this.props}
        />
      );
    }
  }

  const mapStateToProps = (state) => {
    console.log(state);
    const { tasks, task, sprints, sprint, status } = state;
    return {
      tasks,
      task,
      sprints,
      sprint,
      status,
    };
  };

  const mapDispatchToProps=(dispatch)=>{
    return {
      add_task:(task)=>dispatch(add_task(task)),
      handle_change:(key,value)=>dispatch(handle_change(key,value))
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(FormHOCComponent);
};

export default formHoc;
