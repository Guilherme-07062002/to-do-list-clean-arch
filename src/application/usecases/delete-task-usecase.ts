import { DeleteTaskDTO } from "@/domain/dtos";
import { UseCase } from "@/domain/ports";
import { ApiService, StoreService } from "@/domain/services";

export class DeleteTaskUseCase implements UseCase<DeleteTaskDTO, boolean>{
  constructor(
    private readonly storeService: StoreService,
    private readonly apiService: ApiService,
  ) { }

  async execute(data: DeleteTaskDTO): Promise<boolean> {
    await this.apiService.delete(data)
    const result = await this.storeService.delete(data)
    return result
  }
}