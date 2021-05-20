import types from '../utils/ActionTypes'
const { SET_MENU_BAR, SET_CANCEL } = types
const initialState = {
  isInitialMenuBar : true
};

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU_BAR : 
        return {
            ...state,
            isInitialMenuBar : false
        } 
    case SET_CANCEL:
        return {
            ...state,
            isInitialMenuBar : true
        } 
        
    default:
      return state;
  }
};

export default navbarReducer;
