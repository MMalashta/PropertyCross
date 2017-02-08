import { createStore } from 'redux'

function testReducer(state = {mode: 'init'}, action) {
  return state;
}

export default createStore(testReducer)
