import React from "react";
import Task from "../../../Task/Task.js";
import "./statuscard.css";

class StatusCard extends React.Component {
  render() {
    const {tasks,cardName}=this.props;
    return <div className="status-card-padding">
      <h3>{cardName}</h3>
      {
        tasks.map((task,taskIndex)=>{
          return (
            <div key={taskIndex}>
              <Task task={task} />
              <br/>
            </div>
          )
        })
      }

    </div>;
  }
}

export default StatusCard;
