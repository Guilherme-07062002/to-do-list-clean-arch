type TaskProps = {
  id: number;
  description: string;
};

export class Task {
  public id: number;
  public description: string;

  constructor(data: TaskProps) {
    this.id = data.id
    this.description = data.description
  }

  toJSON() {
    return {
      id: this.id,
      description: this.description
    }
  }
}