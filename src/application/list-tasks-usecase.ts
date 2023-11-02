import { TaskDTO } from "@/domain/dtos";
import { UseCase } from "@/domain/ports";
import { StoreService } from '@/domain/services';

export class ListTasksUseCase implements UseCase {
  constructor(
    private readonly storeService: StoreService
  ) { }
  
  async execute(): Promise<TaskDTO[]> {
    const response = await this.storeService.list()
    return response
  }
}