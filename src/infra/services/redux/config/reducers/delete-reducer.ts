import { initialState } from "../store";
import { DeleteAction } from "../actions";

export const DeleteReducer = (state = initialState, action: DeleteAction) => {
  switch (action.type) {
    case 'DELETE':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id)
      };
    default:
      return state;
  }
}
