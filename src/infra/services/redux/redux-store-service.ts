import { CreateTaskDTO, TaskDTO } from "@/domain/dtos";
import { StoreService } from "@/domain/services";
import { Store } from '@reduxjs/toolkit';

export class ReduxStoreService implements StoreService {
  constructor(
    private readonly store: Store,
  ) { }

  async create(data: CreateTaskDTO): Promise<TaskDTO> {
    this.store.dispatch({ type: 'CREATE', payload: data });
    return data as TaskDTO;
  }

  async list(): Promise<TaskDTO[]> {
    const state = this.store.getState();
    return state.tasks;
  }
}
