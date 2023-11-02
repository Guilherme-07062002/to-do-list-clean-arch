import { ApiService, StoreService } from '@/domain/services';
import { CreateTaskDTO } from '@/domain/dtos';
import { UseCase } from '@/domain/ports';

export class CreateTaskUseCase implements UseCase<CreateTaskDTO, void>{
    constructor(
        private readonly storeService: StoreService,
        private readonly apiService: ApiService
    ) { }
    async execute(data: CreateTaskDTO): Promise<void> {
        const response = await this.apiService.create(data)
        await this.storeService.create(response)
    }
}