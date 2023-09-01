export default class SaqueInvalidoError extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "SaqueInvalidoError";
  }
}
