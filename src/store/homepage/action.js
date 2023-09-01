import {ADD_ITEM} from './actionType';
export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};
