import { CreateTaskDTO } from "@/domain/dtos";

export enum CreateActionTypes {
  CREATE = 'CREATE',
}

export interface CreateAction {
  type: CreateActionTypes.CREATE;
  payload: CreateTaskDTO;
}

export const CreateAction = (newTask: CreateTaskDTO): CreateAction => ({
  type: CreateActionTypes.CREATE,
  payload: newTask
})
