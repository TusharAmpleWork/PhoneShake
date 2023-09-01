import {YOUR_NAME} from './actionType';

const initialState = [];
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case YOUR_NAME:
      return [...state, action.data];
    default:
      return state;
  }
};
