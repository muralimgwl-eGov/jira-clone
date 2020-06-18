import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class AddAndUpdate extends React.Component {
  render() {
    const {task={},status=[],addTask,handleChange}=this.props;
    // console.log("add and update",this.props);
    return <div>
    <h2>Add/Update Task</h2>
    <form>
       <TextField value={task.name}   onChange={(e)=>{
         console.log(e.target.value);
         handleChange("name",e.target.value)
       }} id="standard-basic" label="Standard" />
        {/*<input type="text" placeholder="name of the task" />*/}

      <br/>
      <br/>

      <label>
        Status
        <select onChange={(e)=>{
          console.log(e.target.value);
          handleChange("status",e.target.value)
        }}>
          {
            status.map((sts,stsIndex)=><option key={stsIndex} value={sts.code}>{sts.code}</option>)
          }
        </select>
      </label>
      <br/>
      <br/>

      <label>
        Description
        <textarea onChange={(e)=>{
          console.log(e.target.value);
          handleChange("descrption",e.target.value)
        }} value={task.descrption}/>
      </label>
      <br/>
      <br/>

      <Button  onClick={(e)=>{
        e.preventDefault()
        addTask(task)
      }} variant="contained" color="primary">
        Add/Update
      </Button>
    </form>

    </div>;
  }
}

export default AddAndUpdate;
