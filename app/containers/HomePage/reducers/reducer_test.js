import { LOGIN_USER } from '../actions/index';

const INITIAL_STATE = {
  all: [],
  test: null,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGIN_USER:
      return { ...state, test: 'haha' };
    default:
      return state;
  }
}
