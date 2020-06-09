import React from "react";

class Task extends React.Component {
  render() {
    const {task}=this.props;
    return <div>
      Name: {task.name}
      <br/>
      Description: {task.descrption}
    </div>;
  }
}

export default Task;
