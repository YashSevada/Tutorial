import React, { useReducer } from 'react';
import axios from 'axios';
import classReducer from './classReducer';
import classContext from './classContext';

import {
  ADD_CLASS,
  CLASS_ERROR,
  GET_CLASS_ERROR,
  GET_CLASS,
} from '../../../types';

const ClassState = (props) => {
  const initialState = {
    classes: [],
    errors: null,
  };
  const [state, dispatch] = useReducer(classReducer, initialState);

  //   add class
  const addClass = async (room) => {
    const config = {
      'Content-Type': 'application/json',
    };
    try {
      const res = await axios.post('/ClassRoom', room, config);
      dispatch({
        type: ADD_CLASS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: CLASS_ERROR,
        payload: error.response.msg,
      });
    }
  };

  // get class

  const getClassRoom = async () => {
    try {
      const res = await axios.get('/ClassRoom');
      dispatch({
        type: GET_CLASS,
        payload: res,
      });
    } catch (error) {
      dispatch({
        tyep: GET_CLASS_ERROR,
        payload: error.response.msg,
      });
    }
  };

  return (
    <classContext.Provider
      value={{
        classes: state.classes,
        addClass,
        getClassRoom,
      }}>
      {props.children}
    </classContext.Provider>
  );
};

export default ClassState;
