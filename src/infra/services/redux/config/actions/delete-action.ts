import { DeleteTaskDTO } from "@/domain/dtos";
import { Task } from "@/domain/entities";

export enum DeleteActionTypes {
  DELETE = 'DELETE',
}

export interface DeleteAction {
  type: DeleteActionTypes.DELETE;
  payload: DeleteTaskDTO;
}

export const DeleteAction = (data: DeleteTaskDTO): DeleteAction => ({
  type: DeleteActionTypes.DELETE,
  payload: data
})
