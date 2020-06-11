import React from "react";
import StatusCard from "./components/StatusCard/StatusCard.js";
import "./bord.css";

class Board extends React.Component {
  
  render() {
    const {tasks=[]}=this.props;//access props
    const filteredTodoTasks=tasks.filter((task)=>{return task.status==="ToDo"});
    const filteredPendingTasks=tasks.filter((task)=>{return task.status==="Pending"});
    const filteredDoneTasks=tasks.filter((task)=>{return task.status==="Done"});
    return <div>
      <h2>Status Board</h2>
      <div className="flex-layout-status-card">
        <StatusCard tasks={filteredTodoTasks} cardName="ToDo" />
        <StatusCard tasks={filteredPendingTasks} cardName="Pending"/>
        <StatusCard tasks={filteredDoneTasks} cardName="Done"/>
      </div>
    </div>;
  }
}

export default Board;
