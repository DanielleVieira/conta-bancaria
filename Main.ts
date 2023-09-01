import ContaBancaria from "./contas/ContaBancaria";
import ContaPoupanca from "./contas/ContaPoupanca";
import ILogger from "./loggers/ILogger";
import Logger from "./loggers/Logger";

class Main {
  static main() {
    const logger: ILogger = new Logger();
    const loggerPoupanca: ILogger = new Logger();

    const contaBancaria = new ContaBancaria(
      "1234-5678",
      "456.876.234-34",
      logger,
      1000
    );

    const contaPoupanca = new ContaPoupanca(
      "3456-5645",
      "123.543.312-54",
      30,
      loggerPoupanca,
      2000
    );

    console.log("===Conta Bancaria===");
    console.log("Saldo: ", contaBancaria.saldo);
    contaBancaria.depositar(1000);
    contaBancaria.sacar(500);
    console.log("===Logs===");
    console.log(logger.listarLogs());
    console.log("Saldo: ", contaBancaria.saldo);
    console.log("\n");

    console.log("===Conta Poupança===");
    console.log("Juros: ", contaPoupanca.juros);
    console.log("Saldo: ", contaPoupanca.consultarSaldo());
    contaPoupanca.sacar(100);
    contaPoupanca.depositar(300);
    console.log("===Logs===");
    console.log(loggerPoupanca.listarLogs());
    console.log("Saldo: ", contaPoupanca.consultarSaldo());
  }
}

Main.main();
