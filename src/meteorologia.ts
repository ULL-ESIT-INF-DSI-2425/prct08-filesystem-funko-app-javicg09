/**
 * @file meteorologia.ts
 * @description Programa que lee un archivo JSON y lo conovierte a formato CSV.
 */

import fs from 'fs';
import path from 'path';
import { MeteoArgs } from './IArgumentos.js';
import { RegistroMeteo } from './IRegistro.js';

/**
 * Procesa los argumentos de línea de comandos y devuelve un objeto con las rutas de entrada y salida.
 * @returns Objeto con { inputPath, outputPath }.
 */
function procesarArgumentos(): MeteoArgs {
    const args = process.argv.slice(2);
    let inputPath = "";
    let outputPath = "";
  
    for (let i = 0; i < args.length; i++) {
      if (args[i] === "--input" && i + 1 < args.length) {
        inputPath = args[i + 1];
        i++;
      } else if (args[i] === "--output" && i + 1 < args.length) {
        outputPath = args[i + 1];
        i++;
      }
    }
  
    return { inputPath, outputPath };
}

/**
 * Lee un archivo
 * @param filePath Ruta del archivo.
 */
function leerArchivo(filePath: string): void {
    fs.readFile(filePath, 'utf8', (error, data) => {
        if (error) {
            console.error("Error al leer el archivo:", error);
            process.exit(1);
        } else if (data.length === 0){
            console.error("Buffer vacío", data);
            process.exit(1);
        } else {
            console.log("El archivo se ha creado correctamente")
        }
    });
}

/**
 * Escribe una cadena en un archivo
 * @param filePath Ruta del archivo.
 * @param data Cadena a escribir.
 */
function escribirArchivo(filePath: string, data: string): void {
    fs.writeFile(filePath, data);
}
