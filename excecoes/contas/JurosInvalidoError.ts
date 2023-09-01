export default class JurosInvalidoError extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "JurosInvalidoError";
  }
}
