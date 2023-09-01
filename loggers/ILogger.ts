import { Operacoes } from "./Operacoes";

export default interface ILogger {
  registrarLog(
    numeroConta: string,
    titular: string,
    valor: number,
    operacao: Operacoes
  ): void;

  listarLogs(): string;
}
