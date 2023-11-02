import { UseCase } from "@/domain/ports";
import { ApiService, StoreService } from '@/domain/services';

export class ListTasksUseCase implements UseCase {
  constructor(
    private readonly storeService: StoreService,
    private readonly apiService: ApiService
  ) { }

  async execute(): Promise<void> {
    const response = await this.apiService.list()
    await this.storeService.list(response)
  }
}