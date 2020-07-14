import React from "react";
import Board from "../../components/Board/Board.js";
import AddAndUpdate from "../../components/AddAndUpdate/AddAndUpdate.js";
import formHoc from "../../hocs/formHoc.js"



class AciveSprint extends React.Component {

  render() {
    console.log("reder - n");

    // console.log(this);
    const { tasks = [], task = {}, status = [] ,addTask, handleChange } = this.props;


    return (
      <div className="App">
        <Board tasks={tasks} />
        <AddAndUpdate
          task={task}
          status={status}
          addTask={addTask}
          handleChange={handleChange}
        />
      </div>
    );
  }
}

export default formHoc(AciveSprint);
