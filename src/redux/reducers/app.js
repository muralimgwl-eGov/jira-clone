import {ADD_TASK,HANDLE_CHANGE} from "../action-types/action-types"
import { initalTaskState, initalSprintObject } from "../../utils/constants";



const initialState={
  tasks: [
    {
      id: "task1",
      name: "Login screen",
      status: "ToDo",
      descrption: "google and face login",
    },
    {
      id: "task2",
      name: "Login screen-one",
      status: "ToDo",
      descrption: "google and face login",
    },
    {
      id: "task3",
      name: "Login screen-two",
      status: "ToDo",
      descrption: "google and face login",
    },
    {
      id: "task4",
      name: "Login api",
      status: "Pending",
      descrption: "google and face login",
    },
    {
      id: "task5",
      name: "Inital project structure",
      status: "Backlog",
      descrption: "react boiler plate",
    },
  ],
  task: initalTaskState,
  status: [
    {
      code: "Todo",
    },
    {
      code: "Pending",
    },
    {
      code: "Done",
    },
    {
      code: "Backlog",
    }
  ],
  sprints: [
    {
      name: "PB-sprint-1",
      fromDate: 1593520247248,
      toDate: 159352030000,
      goals: "MCS go live",
      tasks: {
        task1: true,
        task2: true,
      },
    },
  ],
  sprint: initalSprintObject,
}


export default (state=initialState,action)=>
{
  switch (action.type) {
    case ADD_TASK:
      //privous state
      let {tasks}=state;
      //push the new task
      tasks.push(action.payload);
      //we return new state
      return {
        ...state,
        tasks
      }

    case HANDLE_CHANGE:
      let {task}=state;
      task[action.payload.key]=action.payload.value
      return {
        ...state,
        task
      }
    default:
      return state;

  }
}
