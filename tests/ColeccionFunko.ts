/**
 * @file ColeccionFunko.spec.ts
 * @description Pruebas unitarias para la clase ColeccionFunko.
 */

import { describe, test, expect } from 'vitest';
import { ColeccionFunko } from '../src/ColeccionFunko.js';
import { Funko } from '../src/Funko/Funko.js';
import { TipoFunko } from '../src/Funko/TipoFunko.js';
import { GeneroFunko } from '../src/Funko/GeneroFunko.js';
import chalk from 'chalk';

describe('ColeccionFunko', () => {
  test('Agregar un Funko exitosamente', () => {
    const coleccion = new ColeccionFunko();
    const funko = new Funko(1, "Classic Sonic", "The best Sonic Funko ever", TipoFunko.Pop, GeneroFunko.Videojuegos, "Sonic The Hedgehog", 1, false, "Cabeza balancea", 150);
    coleccion.agregarFunko(funko);
    expect(coleccion.obtenerFunkos().length).toBe(1);
    expect(coleccion.obtenerFunkos()[0].getNombre()).toBe("Classic Sonic");
  });

  test('No agregar un Funko duplicado', () => {
    const coleccion = new ColeccionFunko();
    const funko1 = new Funko(1, "Classic Sonic", "The best Sonic Funko ever", TipoFunko.Pop, GeneroFunko.Videojuegos, "Sonic The Hedgehog", 1, false, "Cabeza balancea", 150);
    const funko2 = new Funko(1, "Modern Sonic", "Otra versión", TipoFunko.Pop, GeneroFunko.Videojuegos, "Sonic The Hedgehog", 2, true, "Brilla", 200);
    coleccion.agregarFunko(funko1);
    coleccion.agregarFunko(funko2);
    expect(coleccion.obtenerFunkos().length).toBe(1);
  });

  test('Modificar un Funko existente', () => {
    const coleccion = new ColeccionFunko();
    const funkoOriginal = new Funko(1, "Classic Sonic", "The best Sonic Funko ever", TipoFunko.Pop, GeneroFunko.Videojuegos, "Sonic The Hedgehog", 1, false, "Cabeza balancea", 150);
    coleccion.agregarFunko(funkoOriginal);
    const funkoModificado = new Funko(1, "Classic Sonic Updated", "Updated description", TipoFunko.Pop, GeneroFunko.Videojuegos, "Sonic The Hedgehog", 1, false, "Cabeza balancea", 160);
    coleccion.modificarFunko(funkoModificado);
    expect(coleccion.obtenerFunkos()[0].getNombre()).toBe("Classic Sonic Updated");
    expect(coleccion.obtenerFunkos()[0].getValorMercado()).toBe(160);
  });

  test('Eliminar un Funko existente', () => {
    const coleccion = new ColeccionFunko();
    const funko = new Funko(1, "Classic Sonic", "The best Sonic Funko ever", TipoFunko.Pop, GeneroFunko.Videojuegos, "Sonic The Hedgehog", 1, false, "Cabeza balancea", 150);
    coleccion.agregarFunko(funko);
    coleccion.eliminarFunko(1);
    expect(coleccion.obtenerFunkos().length).toBe(0);
  });

  test('Mostrar información de un Funko existente', () => {
    const coleccion = new ColeccionFunko();
    const funko = new Funko(1, "Classic Sonic", "The best Sonic Funko ever", TipoFunko.Pop, GeneroFunko.Videojuegos, "Sonic The Hedgehog", 1, false, "Cabeza balancea", 150);
    coleccion.agregarFunko(funko);
    
    // Para testear el método mostrarFunko, vamos a "espiar" console.log.
    let salida = "";
    const originalLog = console.log;
    console.log = (msg: any) => { salida += msg + "\n"; };

    coleccion.mostrarFunko(1);
    
    // Restauramos console.log
    console.log = originalLog;
    
    expect(salida).toContain("Classic Sonic");
    expect(salida).toContain("150");
  });
});
