import React from "react";

class AddAndUpdate extends React.Component {
  render() {
    return <div>
    <h2>Add/Update Task</h2>
    <form>
      <label>
        Name
        <input type="text" placeholder="name of the task"/>
      </label>
      <br/>
      <br/>

      <label>
        Status
        <select>
          <option value="select status"></option>
          <option value="ToDo">ToDo</option>
          <option value="Progress">Progress</option>
          <option value="Done">Done</option>
        </select>
      </label>
      <br/>
      <br/>

      <label>
        Description
        <textarea/>
      </label>
      <br/>
      <br/>
      
      <button>Add/Update</button>
    </form>

    </div>;
  }
}

export default AddAndUpdate;
