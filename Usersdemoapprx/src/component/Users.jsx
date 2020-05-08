import React, { useEffect } from 'react';
import {fetchUser} from '../redux/actions/actions.users'
import { connect } from 'react-redux';
const Users = ({userData,fetchUser}) => {
    // [] execute function only one time 
    useEffect(()=>{
        fetchUser()
    },[])
    return userData.loading?(
        <h3>loading...</h3>
    ):userData.error?(
        <h2>{userData.error}</h2>
    ):(
        <div>
             <h2>user list </h2>
             <div>
             {
                 userData && userData.users && userData.users.map(user=>{
                 <div>{user.name}</div>
                 })
             }
             </div>
            
        </div>
    )
}
 
const mapToProps=(state)=>{
    return{
     userData:state.users
    }
}
const mapDispatchToprops=(dispatch)=>{
    return{
        fetchUser:()=>dispatch(fetchUser())
    }
}
export default connect(mapToProps,mapDispatchToprops) (Users);