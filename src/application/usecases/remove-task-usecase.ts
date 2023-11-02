// import { DeleteTaskDTO } from "@/domain/dtos";
// import { UseCase } from "@/domain/ports";
// import { StoreService } from "@/domain/services";

// export class RemoveTaskUseCase implements UseCase<DeleteTaskDTO, void>{
//   constructor(
//     private readonly storeService: StoreService
//   ) { }

//   async execute(data: DeleteTaskDTO): Promise<void> {
//     await this.storeService.delete(data)
//   }
// }