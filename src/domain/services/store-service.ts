import { CreateTaskDTO, TaskDTO } from "../dtos";

export interface StoreService {
  create(data: CreateTaskDTO): Promise<TaskDTO>;
  list(): Promise<TaskDTO[]>;
}