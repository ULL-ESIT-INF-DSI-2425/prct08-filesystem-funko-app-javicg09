/**
 * @file Funko.ts
 * @description Define la clase Funko, que representa un Funko Pop con sus propiedades.
 */

import { TipoFunko } from "./TipoFunko.js";
import { GeneroFunko } from "./GeneroFunko.js";

/**
 * Clase que representa un Funko.
 */
export class Funko {
  /**
   * Crea una instancia de Funko.
   * @param id Identificador único del Funko.
   * @param nombre Nombre del Funko.
   * @param descripcion Descripción del Funko.
   * @param tipo Tipo del Funko.
   * @param genero Género del Funko.
   * @param franquicia Franquicia a la que pertenece.
   * @param numero Número identificativo dentro de la franquicia.
   * @param exclusivo Indica si el Funko es exclusivo.
   * @param caracteristicas Características especiales del Funko.
   * @param valorMercado Valor de mercado en coronas (número positivo).
   */
  constructor(
    private id: number,
    private nombre: string,
    private descripcion: string,
    private tipo: TipoFunko,
    private genero: GeneroFunko,
    private franquicia: string,
    private numero: number,
    private exclusivo: boolean,
    private caracteristicas: string,
    private valorMercado: number
  ) {}

  public getId(): number { return this.id; }
  public getNombre(): string { return this.nombre; }
  public getDescripcion(): string { return this.descripcion; }
  public getTipo(): TipoFunko { return this.tipo; }
  public getGenero(): GeneroFunko { return this.genero; }
  public getFranquicia(): string { return this.franquicia; }
  public getNumero(): number { return this.numero; }
  public esExclusivo(): boolean { return this.exclusivo; }
  public getCaracteristicas(): string { return this.caracteristicas; }
  public getValorMercado(): number { return this.valorMercado; }

}
