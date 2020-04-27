import React from 'react'
import jwt from 'jsonwebtoken'
import {Route, Redirect} from 'react-router-dom'

export const PrivateRoute = ({component: Component, ...rest}) => {
    const iStorage = localStorage.getItem('token')
    try{
        var verified = jwt.verify(iStorage, 'yash')
    } catch (error) {
        console.log("Token not verified")
    }
    return (
       <Route 
            {...rest}
            render = {props => !verified ? (<Redirect to="/"/>) : (<Component {...props}/>)}
            />
    )
}

export default PrivateRoute;