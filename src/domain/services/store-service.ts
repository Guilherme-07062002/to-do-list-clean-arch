import {
  TaskDTO,
  CreateTaskDTO,
  UpdateTaskDTO,
  DeleteTaskDTO,
  GetTaskDTO
} from "../dtos";
import { EntityNotFoundError } from "../errors";

export interface StoreService {
  create(data: CreateTaskDTO): Promise<TaskDTO>;
  update(data: UpdateTaskDTO): Promise<boolean | EntityNotFoundError>;
  delete(data: DeleteTaskDTO): Promise<boolean | EntityNotFoundError>;
  get(data: GetTaskDTO): Promise<TaskDTO>;
  list(data: void): Promise<TaskDTO[]>;
}