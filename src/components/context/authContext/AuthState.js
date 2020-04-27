import React,{useReducer,useContext} from 'react'
import AuthContext from './authContext'
import AuthReducer from './authReducer'
import setToken from '../../../utils/setToken'
import axios from 'axios'
import {
    SUCCESS_LOGIN,
    SUCCESS_REGISTER,
    ERROR_LOGIN,
    ERROR_REGISTER,    
    USER_DATA,
    ERROR_USER_DATA,
    LOGOUT
} from '../../../types'

const AuthState = (props) => {
    const initialState = {
      user:null,
      userAuth:false,
      errors:null
    }

const [state, dispatch] = useReducer(AuthReducer, initialState)
const getUser = async () => {
  if(localStorage.token){
    setToken(localStorage.token)
  }
    try {
      const res = await axios.get('/auth')
      dispatch({
        type:USER_DATA,
        payload:res.data.user
      })
    } catch (error) {
      dispatch({
        type:ERROR_USER_DATA,
        payload:error.res
      })
    }
}
//Function to register user

const registerUser = async userData =>{
    const config = {
      header:{
        'Content-Type':'application/json'
      }
    }

    try{
      const res = await axios.post('/register', userData, config)
      dispatch({
        type:SUCCESS_REGISTER,
        payload:res.data
      })
    } catch (error) {
      dispatch({
        type:ERROR_REGISTER,
        payload:error.response.data
      })
    }
}

//Function to login user
const loginUser = async userData => {
    const config = {
      header:{
        'Content-Type':'application/json'
      }
    }

    try{
      const res = await axios.post('/auth', userData, config)
      dispatch({
        type:SUCCESS_LOGIN,
        payload:res.data
      })
    } catch (error) {
      console.log({error})
      dispatch({
        type:ERROR_LOGIN,
        payload:error.response.data
      })
    }
}

const logout = () => {
  dispatch({
    type:LOGOUT
  })
}


  return (
    <div>
      <AuthContext.Provider
          value={{
            user:state.user,
            userAuth:state.userAuth,
            errors:state.errors,
            registerUser,
            loginUser,
            getUser,
            logout
          }}>
          {props.children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthState
