import { DeleteTaskDTO } from "@/domain/dtos";
import { EntityNotFoundError } from "@/domain/errors";
import { UseCase } from "@/domain/ports";
import { StoreService } from "@/domain/services";

export class RemoveTaskUseCase implements UseCase<DeleteTaskDTO, boolean | EntityNotFoundError>{
  constructor(
    private readonly storeService: StoreService
  ) { }

  async execute(data: DeleteTaskDTO): Promise<boolean | EntityNotFoundError> {
    const response = await this.storeService.delete(data)
    return response
  }
}