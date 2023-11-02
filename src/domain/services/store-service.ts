import { CreateTaskDTO, TaskDTO } from "../dtos";

export interface StoreService {
  create(data: CreateTaskDTO): Promise<void>;
  list(data: TaskDTO[]): Promise<void>;
}