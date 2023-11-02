import { TaskDTO, CreateTaskDTO } from "../dtos";

export interface ApiService {
  create(data: CreateTaskDTO): Promise<CreateTaskDTO>;
  list(data: void): Promise<TaskDTO[]>;
}