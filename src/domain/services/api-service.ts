import { TaskDTO, CreateTaskDTO, DeleteTaskDTO } from "../dtos";

export interface ApiService {
  create(data: CreateTaskDTO): Promise<CreateTaskDTO>;
  list(data: void): Promise<TaskDTO[]>;
  delete(data: DeleteTaskDTO): Promise<boolean>;
}