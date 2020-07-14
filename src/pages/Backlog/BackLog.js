import React from "react";
import Sprint from "./components/Sprint/Sprint.js";
import BacklogSection from "./components/BacklogSection/BacklogSection.js";
import formHoc from "../../hocs/formHoc.js"



class Backlog extends React.Component {
  render() {
    const {tasks,sprints,task,status,sprint}=this.props;
    let sprintTasks=[];
    sprints.forEach((sprint) => {
      const {tasks={}}=sprint;
      Object.keys(tasks).forEach((task) => {
        if (tasks[task]) {
          sprintTasks.push(tasks.filter((task)=>{return task.id===task})[0])
        }
      });

      //loop thru object
      //find key value is true then push into sprintTasks
    });

    const backLogTasks=tasks.filter((task)=>{return task.status==="Backlog"});
    return <div>
      <Sprint sprints={sprints} sprint={sprint} tasks={sprintTasks}/>
      <BacklogSection tasks={backLogTasks} sprints={sprints} status={status} task={task}/>
    </div>;
  }
}

export default formHoc(Backlog);
