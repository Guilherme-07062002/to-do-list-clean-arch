import { Task } from "@/domain/entities";

export enum CreateActionTypes {
  CREATE = 'CREATE',
}

export interface CreateAction {
  type: CreateActionTypes.CREATE;
  payload: Task;
}

export const CreateAction = (newTask: Task): CreateAction => ({
  type: CreateActionTypes.CREATE,
  payload: newTask
})
