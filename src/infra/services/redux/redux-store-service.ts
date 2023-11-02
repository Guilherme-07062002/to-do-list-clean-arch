import { CreateTaskDTO } from "@/domain/dtos";
import { ApiService, StoreService } from "@/domain/services";
import { Store } from '@reduxjs/toolkit';

export class ReduxStoreService implements StoreService {
  constructor(
    private readonly store: Store,
    private readonly apiService: ApiService
  ) { }

  async create(data: CreateTaskDTO): Promise<void> {
    const task = await this.apiService.create(data);
    this.store.dispatch({ type: 'CREATE', payload: task });
  }

  async list(): Promise<void> {
    const registers = await this.apiService.list();
    this.store.dispatch({ type: 'LIST', payload: registers });
  }
}
