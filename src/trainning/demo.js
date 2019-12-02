import {createStore} from 'redux';
import {toggleForm, sortTask} from '../actions/index';

var initialState = {
  status: false,
  sort: {
    by: 'name',
    value: 1
  }
}

var myReducer = (state = initialState, action) => {

  if(action.type === 'TOGGLE_FORM'){
    state.status = !state.status;
  }
  return state;
}
const store = createStore(myReducer);
console.log(store.getState());

store.dispatch(toggleForm());

console.log(store.getState());
