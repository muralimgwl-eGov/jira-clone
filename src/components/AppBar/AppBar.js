import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./AppBar.css";

export default function ButtonAppBar({toggeMenu}) {
  return (
    <div className="app-bar-root">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className="menu-button"
            color="inherit"
            aria-label="menu"
            onClick={(e)=>{
              toggeMenu()
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Jira Clone</Typography>
          <Button className="title" color="inherit">
            Create
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
