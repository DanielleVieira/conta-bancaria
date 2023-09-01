export default class NumeroContaInvalidoError extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "NumeroContaInvalidoError";
  }
}
