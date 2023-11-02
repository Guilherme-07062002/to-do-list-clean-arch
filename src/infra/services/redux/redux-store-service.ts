import { CreateTaskDTO, TaskDTO } from "@/domain/dtos";
import { StoreService } from "@/domain/services";
import { Store } from '@reduxjs/toolkit';

export class ReduxStoreService implements StoreService {
  constructor(
    private readonly store: Store,
  ) { }

  async create(data: CreateTaskDTO): Promise<void> {
    this.store.dispatch({ type: 'CREATE', payload: data });
  }

  async list(data: TaskDTO[]): Promise<void> {
    this.store.dispatch({ type: 'LIST', payload: data });
  }
}
