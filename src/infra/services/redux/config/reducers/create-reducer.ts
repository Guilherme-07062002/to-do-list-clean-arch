import { initialState } from "../store";
import { CreateAction } from "../actions";
import { RootState } from "@/domain/state";

export const CreateReducer = (state: RootState = initialState, action: CreateAction) => {
  switch (action.type) {
    case 'CREATE':
      return {
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
}
