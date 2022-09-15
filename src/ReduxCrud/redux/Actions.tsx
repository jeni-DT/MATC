import * as types from "./ActionType";
import axios from "axios";
import { error } from "console";
import TokenService from "../../Admin/Interceptor/Service/TokenService";
import usersReducers from "./Reducer";
interface editValue{
    name ?: string,
    email?: string,
    phonenumber :number,
    Nopass :number,
    pickup ?:string,
    drop ?:string,
    date ?:string,
    time?:string,
    id?:number,
}
const getUsers=(users:any)=>({
    type:types.GET_USERS,
    payload:users,

})
const postUsers=(users:any)=>({
    type:types.ADD_DETAILS,
  

})
const postLogin=(users:any)=>({
    type:types.POST_USERS,
  

})
const userDeleted=()=>({
    type:types.DELETE_USER,
    
})
const updateDetails=()=>({
    type:types.UPDATE_USERS,
})
const getDetails=(users:any)=>({
    type:types.GET_UPDATE_USERS,
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
 export  const addUsers =(values:any)=>{
    return function (dispatch:any){
        axios.post (`${process.env.REACT_APP_API}`,values)
        .then((resp)=>{
            console.log("response:",resp);
            dispatch(postUsers(resp.data))
        })
        .catch((error)=>console.log(error))
    }
 }
 export  const deleteUser =(id:number)=>{
    return function (dispatch:any){
        axios.delete (`${process.env.REACT_APP_API}/${id}`)
        .then((resp)=>{
            console.log("response:",resp);
            dispatch(userDeleted());
            dispatch(loadUsers());
        })
        .catch((error)=>console.log(error))
    }
 }
 export  const updateUser =(details:any,id:number)=>{
    console.log("details",details)
    return function (dispatch:any){
        axios.put (`${process.env.REACT_APP_API}/${id}`,details)
        .then((resp)=>{
            console.log("response:",resp);
            dispatch(updateDetails());
           
        })
        .catch((error)=>console.log(error))
    }
 }
 export  const getuserValue =(updatevalue:editValue)=>{
    console.log(updatevalue);
    return function (dispatch:any){
        axios.put (`${process.env.REACT_APP_API}/${updatevalue.id}`,updatevalue)
        .then((resp)=>{
            console.log("response:",resp);
            dispatch (getDetails(resp.data));
           
        })
        .catch((error)=>console.log(error))
    }
 }
//  export const getBooking =()=>{
//     return function (dispatch:any){
//         axios.get (" http://localhost:5000/")
//         .then((resp)=>{
            
            
//         })
//         .catch((error)=>console.log(error))
//     } 
//  }
