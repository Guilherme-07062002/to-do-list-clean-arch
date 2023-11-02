import { ListAction } from "../actions";
import { initialState } from "../store";

export const ListReducer = (state = initialState, action: ListAction) => {
  switch (action.type) {
    case 'LIST':
      return {
        ...state,
        tasks: action.payload
      }
    default:
      return state;
  }
}