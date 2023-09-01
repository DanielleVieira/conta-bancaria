export default class TitularInvalidoError extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "TitularInvalidoError";
  }
}
