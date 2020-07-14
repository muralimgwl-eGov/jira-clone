import {ADD_TASK,HANDLE_CHANGE} from "../action-types/action-types"

export const add_task=(task)=>{
  return {
    type:ADD_TASK,
    payload:task
  }
}


export const handle_change=(key,value)=>{
  return {
    type:HANDLE_CHANGE,
    payload:{
      key,
      value
    }
  }
}
