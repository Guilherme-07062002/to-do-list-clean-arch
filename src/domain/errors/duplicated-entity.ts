import { ApplicationError } from "./application-error";

export class DuplicatedEntityError extends ApplicationError {
  constructor(entity: string) {
    super(`This ${entity} already exists`, "E151");
  }
}