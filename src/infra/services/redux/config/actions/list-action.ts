import { TaskDTO } from "@/domain/dtos";

export enum ListActionTypes {
  LIST = 'LIST',
}

export interface ListAction {
  type: ListActionTypes.LIST;
  payload: TaskDTO[]
}

export const createListAction = (tasks: TaskDTO[]): ListAction => ({
  type: ListActionTypes.LIST,
  payload: tasks
})
