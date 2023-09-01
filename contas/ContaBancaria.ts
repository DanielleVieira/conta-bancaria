import ILogger from "../loggers/ILogger";
import OperacoesBancarias from "./OperacoesBancarias";
import { Operacoes } from "../loggers/Operacoes";
import Validacao from "../validacoes/ValidacaoConta";

export default class ContaBancaria implements OperacoesBancarias {
  private _numeroConta: string;
  private _titular: string;
  private _logger: ILogger;
  private _saldo: number;

  constructor(
    numeroConta: string,
    titular: string,
    logger: ILogger,
    saldo: number = 0
  ) {
    Validacao.validaNumeroConta(numeroConta);
    Validacao.validaTitular(titular);
    this._numeroConta = numeroConta;
    this._titular = titular;
    this._logger = logger;
    this._saldo = saldo;
  }

  depositar(valorDeposito: number): void {
    Validacao.validaDeposito(valorDeposito);
    this._saldo += valorDeposito;
    this._logger.registrarLog(
      this._numeroConta,
      this._titular,
      valorDeposito,
      Operacoes.Deposito
    );
  }

  sacar(valorSaque: number): void {
    Validacao.validaSaque(valorSaque);
    this._saldo -= valorSaque;
    this._logger.registrarLog(
      this._numeroConta,
      this._titular,
      valorSaque,
      Operacoes.Saque
    );
  }

  get saldo(): number {
    return this._saldo;
  }

  set saldo(valorSaldo: number) {
    this._saldo = valorSaldo;
  }

  get numeroConta(): string {
    return this._numeroConta;
  }

  set numeroConta(novoNumeroConta: string) {
    Validacao.validaNumeroConta(novoNumeroConta);
    this._numeroConta = novoNumeroConta;
  }

  get titular(): string {
    return this._titular;
  }

  set titular(novoTitular: string) {
    Validacao.validaTitular(novoTitular);
    this._titular = novoTitular;
  }

  get logger(): ILogger {
    return this._logger;
  }

  set logger(novoLogger: ILogger) {
    this._logger = novoLogger;
  }
}
