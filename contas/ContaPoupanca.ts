import ILogger from "../loggers/ILogger";
import Validacao from "../validacoes/Validacao";
import ContaBancaria from "./ContaBancaria";

export default class ContaPoupanca extends ContaBancaria {
  private _juros: number;

  constructor(
    numeroConta: string,
    titular: string,
    juros: number,
    logger: ILogger,
    saldo: number = 0
  ) {
    super(numeroConta, titular, logger, saldo);
    Validacao.validaJuros(juros);
    this._juros = juros;
  }

  consultarSaldo(): number {
    return super.saldo + this._juros;
  }

  get juros(): number {
    return this._juros;
  }

  set juros(novoJuros: number) {
    Validacao.validaJuros(novoJuros);
    this._juros = novoJuros;
  }
}
