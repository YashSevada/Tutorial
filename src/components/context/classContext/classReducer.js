import {
  ADD_CLASS,
  CLASS_ERROR,
  GET_CLASS,
  GET_CLASS_ERROR,
} from '../../../types';

export default (state, { type, payload }) => {
  switch (type) {
    case GET_CLASS:
      return {
        ...state,
        classes: payload,
      };
    case ADD_CLASS:
      return {
        ...state,
        classes: payload,
      };
    case CLASS_ERROR:
    case GET_CLASS_ERROR:
      return {
        ...state,
        classes: [],
        errors: payload,
      };
    default:
      return state;
  }
};
