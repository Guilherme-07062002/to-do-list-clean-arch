export type CreateTaskDTO = {
    description: string
}

export type DeleteTaskDTO = {
    id: number
}

export type UpdateTaskDTO = {
    id: number,
    new_description: string
}

export type GetTaskDTO = {
    id: number
}

export type TaskDTO = {
    id: number,
    description: string
}
