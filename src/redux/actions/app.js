import {ADD_TASK,HANDLE_CHANGE,INCREMENT_TIME_AFTER_ONE_SEC} from "../action-types/action-types"


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

export const incrementTimer=()=>{
  return {
    type:INCREMENT_TIME_AFTER_ONE_SEC
  }
}


export const addTimerAysnc=()=>{
  return async (dispatch,getState)=>{
    const state=getState();
    console.log(state);
    // setTimeout(()=>{
    //   dispatch(incrementTimer())
    // },2000)
    try {
      const res=await fetch("https://api.covid19india.org/data.json");
    } catch (e) {
      console.log(e);
    } finally {

    }




    // console.log("ssdaasd");
  }
}
