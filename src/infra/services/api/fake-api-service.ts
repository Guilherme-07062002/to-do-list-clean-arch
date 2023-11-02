import { CreateTaskDTO, TaskDTO } from "@/domain/dtos";
import { Task } from "@/domain/entities";
import { ApiService } from "@/domain/services";

export class FakeApiService implements ApiService {
  public tasks: Task[] = []
  async create(data: CreateTaskDTO): Promise<TaskDTO> {
    this.tasks.push(new Task({ id: this.tasks.length + 1, ...data }));
    return {
      id: this.tasks.length + 1,
      description: data.description
    };
  }

  async list(): Promise<TaskDTO[]> {
    return [
      ...this.tasks.map(task => ({
        id: task.id,
        description: task.description
      }))
    ];
  }
}