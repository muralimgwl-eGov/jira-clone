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
import  {addTimerAysnc} from "./redux/actions/app";
import {connect}  from  "react-redux";
import {Button} from "@material-ui/core";


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

    const {addTimerAysnc, time}=this.props;

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
        <h4>{time}</h4>
        <Button variant="contained" onClick={(e)=>{
          addTimerAysnc()}}>Increament sec after 2</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { time } = state;
  return {
    time
  };
};

const mapDispatchToProps=(dispatch)=>{
  return {
    addTimerAysnc:()=>dispatch(addTimerAysnc())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
