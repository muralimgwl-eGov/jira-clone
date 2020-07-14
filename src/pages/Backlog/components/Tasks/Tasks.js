import React from "react";
import List from "@material-ui/core/List";
import TaskItem from "../TaskItem/TaskItem.js";

const Tasks = ({ tasks = [] }) => {
  return (
    <List component="nav" aria-label="main mailbox folders">
      {tasks.map((task, key) => (
        <TaskItem task={task} key={key} />
      ))}
    </List>
  );
};

export default Tasks;
