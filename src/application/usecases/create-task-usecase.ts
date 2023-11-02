import { StoreService } from '@/domain/services';
import { CreateTaskDTO, TaskDTO } from '@/domain/dtos';
import { UseCase } from '@/domain/ports';

export class CreateTaskUseCase implements UseCase<CreateTaskDTO, TaskDTO | null>{
    constructor(
        private readonly storeService: StoreService
    ) { }
    async execute(data: CreateTaskDTO): Promise<TaskDTO | null> {
        const response = await this.storeService.create(data)
        return response
    }
}