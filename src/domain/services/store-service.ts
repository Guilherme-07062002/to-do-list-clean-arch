import { CreateTaskDTO } from "../dtos";

export interface StoreService {
  create(data: CreateTaskDTO): Promise<void>;
  list(data: void): Promise<void>;
}