import { ApplicationError } from "./application-error";

export class EntityNotFoundError extends ApplicationError {
  constructor(entity: string) {
    super(`${entity} not found`, "E100");
  }
}