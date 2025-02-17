import React, { Children } from 'react'
 import {useAuth} from '../context/AuthContext'
 import {Navigate} from 'react-router-dom'
const PrivateRoute = ({children}) => {
    const {currentUser,Loading}=useAuth();

    if(Loading){
      return <div>Loading..</div>
    }
    if(currentUser){
        return children;

    }
  return (
    <Navigate to="/login" replace/>
  )
}

export default PrivateRoute