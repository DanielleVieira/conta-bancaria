import DepositoInvalidoError from "../excecoes/contas/DepositoInvalidoError";
import SaqueInvalidoError from "../excecoes/contas/SaqueInvalidoError";
import TitularInvalidoError from "../excecoes/contas/TitularInvalidoError";
import NumeroContaInvalidoError from "../excecoes/contas/NumeroContaInvalidoError";
import JurosInvalidosError from "../excecoes/contas/JurosInvalidoError";

export default abstract class Validacao {
  private static validaString(str: string, error: Error) {
    if (!str) {
      throw error;
    }
  }

  static validaTitular(titular: string) {
    this.validaString(
      titular,
      new TitularInvalidoError("CPF do titular inválido")
    );
  }

  static validaNumeroConta(numeroConta: string) {
    this.validaString(
      numeroConta,
      new NumeroContaInvalidoError("Numero da Conta inválido")
    );
  }

  private static validaValor(valor: number, error: Error) {
    if (valor <= 0) {
      throw error;
    }
  }

  static validaDeposito(valor: number): void {
    this.validaValor(
      valor,
      new DepositoInvalidoError("Valor do depósito inválido")
    );
  }

  static validaSaque(valor: number): void {
    this.validaValor(valor, new SaqueInvalidoError("Valor do saque inválido"));
  }

  static validaJuros(valor: number): void {
    this.validaValor(valor, new JurosInvalidosError("Valor de juros inválido"));
  }
}
