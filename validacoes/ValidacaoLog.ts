import LogInvalidoError from "../excecoes/loggers/LogInvalidoError";

export default abstract class ValidacaoLog {
  static validaLog(numeroConta: string, titular: string, valor: number): void {
    if (!numeroConta || !titular || valor <= 0) {
      throw new LogInvalidoError("Numero da Conta, Titular ou Valor Inválidos");
    }
  }
}
