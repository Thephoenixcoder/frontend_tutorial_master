import {FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_FAILED} from './types';
import axios from "axios"

const fecthUserRequest =()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}

const fetchUserSuccess=(users)=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}
const fetchUserFailed=error=>{
    return{
        type:FETCH_USER_FAILED,
        payload:error
    }
}

export const fetchUser=()=>{
    return function(dispatch){
        dispatch(fecthUserRequest())
        
        axios.get("https://jsonplaceholder.typicode.com/users").then(response=>{
            const users=response.data.map(user=>user.id)
            
            dispatch(fetchUserSuccess(users))
            // response.data
        }).catch(error=>{
            // error.message  is the error description
            dispatch(fetchUserFailed(error.message))
        })
    }
}


