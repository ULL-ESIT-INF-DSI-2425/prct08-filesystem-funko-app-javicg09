/**
 * @file contador_logs.ts
 * @description Programa que lee un archivo de logs y cuenta las ocurrencias de una palabra clave.
 * La ruta del archivo y la palabra clave se pasan desde la línea de comandos.
 */

import fs from 'fs';
import { Argumentos } from './IArgumentos.js';

/**
 * Cuenta el número de ocurrencias de una palabra clave en un texto.
 *
 * @param texto El texto en el que buscar.
 * @param palabra La palabra clave a contar.
 * @returns El número de ocurrencias encontradas.
 */
function contarOcurrencias(texto: string, palabra: string): number {
    const expresion = new RegExp(palabra, 'g');
    const coincidencias = texto.match(expresion);
    return coincidencias ? coincidencias.length : 0;
}


  /**
   * Procesa los argumentos de la línea de comandos y devuelve un objeto con los parámetros.
   * Se espera que se pasen los parámetros "--file" y "--keyword" seguidos de sus valores.
   *
   * @returns Objeto con los parámetros: { file, keyword }.
   */
function procesarArgumentos(): Argumentos {
    const args = process.argv.slice(2);
    let rutaArchivo = "";
    let palabraClave = "";
  
    for (let i = 0; i < args.length; i++) {
        if (args[i] === "--file" && i + 1 < args.length) {
            rutaArchivo = args[i + 1];
            i++;
        } else if (args[i] === "--keyword" && i + 1 < args.length) {
            palabraClave = args[i + 1];
            i++;
        }
    }
    return { file: rutaArchivo, keyword: palabraClave };
}

/**
 * Funcion que analiza un archivo de texto y busca las palabras clave
 * @param file Archivo a analizar
 * @param keyword Palabra clave para buscar
 */
function analizarArchivo (file: string,  keyword: string) {
    fs.readFile(file, 'utf8', (error, data) => {
        if (error) {
            console.error("Error al leer el archivo:", error);
            process.exit(1);
        } else if (data.length === 0){
            console.error("Buffer vacío", data);
            process.exit(1);
        }
        const ocurrencias = contarOcurrencias(data, keyword);
        console.log(`La palabra "${keyword}" aparece ${ocurrencias} veces.`);
    });
}

/**
 * Función principal del programa.
 * Procesa los argumentos de línea de comandos, lee el archivo de logs y muestra la cantidad de ocurrencias de la palabra clave.
 */
function main(): void {
    const { file, keyword } = procesarArgumentos();
      
    if (!file || !keyword) {
        console.error("Error: Debe proporcionar la ruta del archivo (--file) y la palabra clave (--keyword).");
        process.exit(1);
    }
      
    analizarArchivo(file, keyword);
}
      
main();