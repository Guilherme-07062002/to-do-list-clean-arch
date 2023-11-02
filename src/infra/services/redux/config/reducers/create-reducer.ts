import { initialState } from "../store";
import { CreateAction } from "../actions";

export const CreateReducer = (state = initialState, action: CreateAction) => {
  switch (action.type) {
    case 'CREATE':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    default:
      return state;
  }
}
