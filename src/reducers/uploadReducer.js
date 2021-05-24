import types from '../utils/ActionTypes'

const { SET_JOB_OBJECT, SET_CAR_0R_ROOM_OBJECT } = types
const initialState = {

};

const securityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOB_OBJECT : 
        return {
            ...state,
            initialState : action.payload,
        } 
        case SET_CAR_0R_ROOM_OBJECT : 
        return {
            ...state,
            initialState : action.payload,
        } 

    default:
      return state;
  }
};

export default securityReducer;
