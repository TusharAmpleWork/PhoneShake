import {ADD_ITEM} from './actionType';

const initialState = [];
export const reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...initialState, action.payload];
    default:
      return state;
  }
};
