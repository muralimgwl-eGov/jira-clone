import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Tasks = ({ task = {} }) => {
  return (
    <ListItem button>
      <ListItemText primary={task.name} />
    </ListItem>
  );
};

export default Tasks;
