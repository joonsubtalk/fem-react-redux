import { SET_SEARCH_TERM } from './actions';

const DEFAULT_STATE = {
  searchTerm: ''
}

// left merge of Object; never modify original state.
const setSearchTerm = (state, action) => Object.assign({}, state, {searchTerm: action.payload});

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    default:
      return state;
  }
}

export default rootReducer;
