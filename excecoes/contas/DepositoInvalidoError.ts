export default class DepositoInvalidoError extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "DepositoInvalidoError";
  }
}
