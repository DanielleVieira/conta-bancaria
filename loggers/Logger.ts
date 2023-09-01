import ILogger from "./ILogger";
import LogInvalidoError from "../excecoes/loggers/LogInvalidoError";
import { Operacoes } from "./Operacoes";

export default class Logger implements ILogger {
  private logs: string[];

  constructor() {
    this.logs = [];
  }

  registrarLog(
    numeroConta: string,
    titular: string,
    valor: number,
    operacao: Operacoes
  ): void {
    if (!numeroConta || !titular || valor <= 0) {
      throw new LogInvalidoError("Numero da Conta, Titular ou Valor Inválidos");
    } else {
      this.logs.push(
        `Operação de ${operacao} realizada na Conta - ${numeroConta}, CPF - ${titular}, com valor ${valor}`
      );
    }
  }

  listarLogs(): string {
    return this.logs.join("\n");
  }
}
