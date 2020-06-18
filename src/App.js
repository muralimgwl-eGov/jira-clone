import React from "react";
import AppBar from "./components/AppBar/AppBar.js";
import Drawer from "./components/Drawer/Drawer.js";
import {
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import ActiveSprint from "./pages/ActiveSprint/ActiveSprint.js";
import Backlog from "./pages/Backlog/BackLog.js";


class App extends React.Component {
  state = {
    hasDrawerOpen:false
  };

  toggeMenu=()=>{
    const {hasDrawerOpen}=this.state;
    this.setState({
      hasDrawerOpen:!hasDrawerOpen
    })
  }

  render() {
    console.log(this);
    const { hasDrawerOpen} = this.state;
    const {
      toggeMenu
    } = this;

    return (
      <div className="App">
        <AppBar toggeMenu={toggeMenu}/>
        <Switch>
          <Route path="/backlog">
            <Backlog/>
          </Route>
          <Route path="/">
            <ActiveSprint />
          </Route>
        </Switch>
        <Drawer hasDrawerOpen={hasDrawerOpen} toggeMenu={toggeMenu}/>
      </div>
    );
  }
}

export default App;
