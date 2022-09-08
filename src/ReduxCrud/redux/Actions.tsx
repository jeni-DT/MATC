import * as types from "./ActionType";
import axios from "axios";
import { error } from "console";
const getUsers=(users:any)=>({
    type:types.GET_USERS,
    payload:users,
})
 export  const loadUsers =()=>{
    return function (dispatch:any){
        axios.get (`${process.env.REACT_APP_API}`)
        .then((resp)=>{
            console.log("response:",resp);
            dispatch(getUsers(resp.data))
        })
        .catch((error)=>console.log(error))
    }
 }