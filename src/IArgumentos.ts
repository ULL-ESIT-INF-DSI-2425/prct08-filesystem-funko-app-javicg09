/**
 * Interfaz que representa los parámetros extraídos de la línea de comandos.
 */
export interface Argumentos {
    file: string;
    keyword: string;
  }

export interface MeteoArgs {
  inputPath: string;
  outputPath: string;
}
  