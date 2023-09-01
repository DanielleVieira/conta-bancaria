import Validacao from "../validacoes/ValidacaoLog";
import ILogger from "./ILogger";
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
    Validacao.validaLog(numeroConta, titular, valor);
    this.logs.push(
      `Operação de ${operacao} realizada na Conta - ${numeroConta}, CPF - ${titular}, com valor ${valor}`
    );
  }

  listarLogs(): string {
    return this.logs.join("\n");
  }
}
