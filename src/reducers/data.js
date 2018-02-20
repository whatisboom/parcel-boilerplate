import { SET_DATA } from '../actions/types';

export default function data(data = [], action) {
  switch (action.type) {
    case SET_DATA:
      return action.data;
    default:
      return data;
  }
}
