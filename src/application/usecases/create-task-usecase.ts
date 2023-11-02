import { ApiService, StoreService } from '@/domain/services';
import { CreateTaskDTO, TaskDTO } from '@/domain/dtos';
import { UseCase } from '@/domain/ports';

export class CreateTaskUseCase implements UseCase<CreateTaskDTO>{
    constructor(
        private readonly storeService: StoreService,
        private readonly apiService: ApiService
    ) { }
    async execute(data: CreateTaskDTO): Promise<TaskDTO> {
        const response = await this.apiService.create(data)
        await this.storeService.create(response)
        return response as TaskDTO
    }
}