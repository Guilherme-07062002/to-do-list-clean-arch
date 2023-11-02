import { CreateTaskDTO, DeleteTaskDTO, TaskDTO } from "../dtos";

export interface StoreService {
  create(data: CreateTaskDTO): Promise<TaskDTO>;
  list(): Promise<TaskDTO[]>;
  delete(data: DeleteTaskDTO): Promise<boolean>;
}