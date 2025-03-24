/**
 * @file ColeccionFunko.ts
 * @description Define la clase ColeccionFunko que gestiona la lista de Funkos de un usuario.
 */

import { Funko } from "../src/Funko/Funko.js";
import chalk from "chalk";

/**
 * Clase que representa la colección de Funko de un usuario.
 */
export class ColeccionFunko {
  private funkos: Funko[];

  /**
   * Crea una instancia de ColeccionFunko.
   */
  constructor() {
    this.funkos = [];
  }

  /**
   * Agrega un Funko a la colección.
   * Si ya existe un Funko con el mismo ID, muestra un mensaje de error en rojo.
   * De lo contrario, agrega el Funko y muestra un mensaje informativo en verde.
   * @param funko Funko a agregar.
   */
  public agregarFunko(funko: Funko): void {
    const existente = this.funkos.find(f => f.getId() === funko.getId());
    if (existente) {
      console.error(chalk.red("¡El Funko ya existe en la colección!"));
    } else {
      this.funkos.push(funko);
      console.log(chalk.green("¡Nuevo Funko agregado a la colección!"));
    }
  }

  /**
   * Modifica un Funko existente.
   * Si se encuentra el Funko, lo actualiza y muestra un mensaje informativo en verde.
   * Si no, muestra un mensaje de error en rojo.
   * @param funko Funko actualizado.
   */
  public modificarFunko(funko: Funko): void {
    const index = this.funkos.findIndex(f => f.getId() === funko.getId());
    if (index === -1) {
      console.error(chalk.red("¡Funko no encontrado en la colección!"));
    } else {
      this.funkos[index] = funko;
      console.log(chalk.green("¡Funko modificado en la colección!"));
    }
  }

  /**
   * Elimina un Funko de la colección por su ID.
   * Si se encuentra el Funko, lo elimina y muestra un mensaje informativo en verde.
   * Si no, muestra un mensaje de error en rojo.
   * @param id ID del Funko a eliminar.
   */
  public eliminarFunko(id: number): void {
    const index = this.funkos.findIndex(f => f.getId() === id);
    if (index === -1) {
      console.error(chalk.red("¡Funko no encontrado en la colección!"));
    } else {
      this.funkos.splice(index, 1);
      console.log(chalk.green("¡Funko eliminado de la colección!"));
    }
  }

  /**
   * Lista todos los Funkos de la colección por consola.
   * Muestra el valor de mercado con colores según rangos:
   * - Valor >= 1000: verde.
   * - Valor >= 500: amarillo.
   * - Valor >= 100: azul.
   * - Valor menor: rojo.
   */
  public listarFunkos(): void {
    console.log(chalk.green("Colección de Funko:"));
    this.funkos.forEach(funko => {
      let colorValor: string;
      const valor = funko.getValorMercado();
      if (valor >= 1000) {
        colorValor = chalk.green(valor.toString());
      } else if (valor >= 500) {
        colorValor = chalk.yellow(valor.toString());
      } else if (valor >= 100) {
        colorValor = chalk.blue(valor.toString());
      } else {
        colorValor = chalk.red(valor.toString());
      }
      console.log(chalk.green("--------------------------------"));
      console.log(chalk.green(`ID: ${funko.getId()}`));
      console.log(chalk.green(`Nombre: ${funko.getNombre()}`));
      console.log(chalk.green(`Descripción: ${funko.getDescripcion()}`));
      console.log(chalk.green(`Tipo: ${funko.getTipo()}`));
      console.log(chalk.green(`Género: ${funko.getGenero()}`));
      console.log(chalk.green(`Franquicia: ${funko.getFranquicia()}`));
      console.log(chalk.green(`Número: ${funko.getNumero()}`));
      console.log(chalk.green(`Exclusivo: ${funko.esExclusivo()}`));
      console.log(chalk.green(`Características: ${funko.getCaracteristicas()}`));
      console.log(chalk.green(`Valor de mercado: ${colorValor}`));
    });
  }

  /**
   * Muestra la información de un Funko concreto.
   * Si no se encuentra, muestra un mensaje de error en rojo.
   * @param id ID del Funko.
   */
  public mostrarFunko(id: number): void {
    const funko = this.funkos.find(f => f.getId() === id);
    if (!funko) {
      console.error(chalk.red("¡Funko no encontrado en la colección!"));
    } else {
      let colorValor: string;
      const valor = funko.getValorMercado();
      if (valor >= 1000) {
        colorValor = chalk.green(valor.toString());
      } else if (valor >= 500) {
        colorValor = chalk.yellow(valor.toString());
      } else if (valor >= 100) {
        colorValor = chalk.blue(valor.toString());
      } else {
        colorValor = chalk.red(valor.toString());
      }
      console.log(chalk.green("--------------------------------"));
      console.log(chalk.green(`ID: ${funko.getId()}`));
      console.log(chalk.green(`Nombre: ${funko.getNombre()}`));
      console.log(chalk.green(`Descripción: ${funko.getDescripcion()}`));
      console.log(chalk.green(`Tipo: ${funko.getTipo()}`));
      console.log(chalk.green(`Género: ${funko.getGenero()}`));
      console.log(chalk.green(`Franquicia: ${funko.getFranquicia()}`));
      console.log(chalk.green(`Número: ${funko.getNumero()}`));
      console.log(chalk.green(`Exclusivo: ${funko.esExclusivo()}`));
      console.log(chalk.green(`Características: ${funko.getCaracteristicas()}`));
      console.log(chalk.green(`Valor de mercado: ${colorValor}`));
    }
  }

  /**
   * Devuelve la lista completa de Funkos.
   * @returns Array de Funkos.
   */
  public obtenerFunkos(): Funko[] {
    return this.funkos;
  }
}
