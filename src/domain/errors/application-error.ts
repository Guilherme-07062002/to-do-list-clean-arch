export class ApplicationError extends Error {
  readonly code: string | undefined;

  constructor(message: string, code?: string) {
    super(message);
    this.name = "ApplicationError";
    this.code = code;
  }
}