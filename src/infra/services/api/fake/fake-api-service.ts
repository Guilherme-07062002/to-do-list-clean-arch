import { CreateTaskDTO, TaskDTO } from "@/domain/dtos";
import { ApiService } from "@/domain/services";
import { ReduxAppStore } from "../../redux/config/store/store";

export class FakeApiService implements ApiService {
  async create(task: CreateTaskDTO): Promise<TaskDTO> {
    console.log('Nova task criada')
    console.log(JSON.stringify(task))
    return task;
  }

  async list(): Promise<TaskDTO[]> {
    const state: any = ReduxAppStore.getState();
    const tasks = state.tasks;
    return tasks;
  }

  async delete(data: TaskDTO): Promise<boolean> {
    console.log('Task deletada')
    console.log(JSON.stringify(data))
    return true;
  }
}