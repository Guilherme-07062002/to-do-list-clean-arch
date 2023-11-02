export interface UseCase<T = unknown, Z = unknown> {
    execute(data: T): Promise<Z>
}