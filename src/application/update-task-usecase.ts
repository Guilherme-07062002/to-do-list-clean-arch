import { StoreService } from "@/domain/services";
import { UpdateTaskDTO } from "@/domain/dtos";
import { UseCase } from "@/domain/ports";
import { EntityNotFoundError } from '@/domain/errors';

export class UpdateTaskUsecase implements UseCase<UpdateTaskDTO, boolean | EntityNotFoundError>{
  constructor(
    private readonly storeService: StoreService
  ) { }

  async execute(data: UpdateTaskDTO): Promise<boolean | EntityNotFoundError> {
    const response = await this.storeService.update(data)
    return response
  }
}