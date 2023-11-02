import { initialState } from "../store";
import { CreateAction, DeleteAction } from "../actions";

const taskReducer = (state = initialState, action: CreateAction | DeleteAction) => {
  switch (action.type) {
    case 'CREATE':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case 'DELETE':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default taskReducer;