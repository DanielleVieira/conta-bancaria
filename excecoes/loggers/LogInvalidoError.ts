export default class LogInvalidoError extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "LogInvalidoError";
  }
}
