/**
 * @file FunkoApp.ts
 * @description Aplicación CLI para gestionar la colección de Funko.
 

import yargs from 'yargs';
import chalk from 'chalk';
import { ColeccionFunko } from './ColeccionFunko.js';
import { Funko } from './Funko/Funko.js';
import { TipoFunko } from './Funko/TipoFunko.js';
import { GeneroFunko } from './Funko/GeneroFunko.js';

const coleccion = new ColeccionFunko();

yargs(hideBin(process.argv))
  .command('add', 'Añadir un Funko a la colección', {
    user: {
      description: 'Nombre del usuario',
      type: 'string',
      demandOption: true
    },
    id: {
      description: 'ID del Funko',
      type: 'number',
      demandOption: true
    },
    name: {
      description: 'Nombre del Funko',
      type: 'string',
      demandOption: true
    },
    desc: {
      description: 'Descripción del Funko',
      type: 'string',
      demandOption: true
    },
    type: {
      description: 'Tipo del Funko (Pop!, Pop! Rides, Vynil Soda, Vynil Gold)',
      type: 'string',
      demandOption: true
    },
    genre: {
      description: 'Género del Funko (Animación, Películas y TV, Videojuegos, Deportes, Música, Ánime)',
      type: 'string',
      demandOption: true
    },
    franchise: {
      description: 'Franquicia del Funko',
      type: 'string',
      demandOption: true
    },
    number: {
      description: 'Número identificativo en la franquicia',
      type: 'number',
      demandOption: true
    },
    exclusive: {
      description: 'Indica si es exclusivo (true/false)',
      type: 'boolean',
      demandOption: true
    },
    features: {
      description: 'Características especiales',
      type: 'string',
      demandOption: true
    },
    marketValue: {
      description: 'Valor de mercado en coronas (número positivo)',
      type: 'number',
      demandOption: true
    }
  }, (argv) => {
    const funko = new Funko(
      argv.id,
      argv.name,
      argv.desc,
      argv.type as TipoFunko,
      argv.genre as GeneroFunko,
      argv.franchise,
      argv.number,
      argv.exclusive,
      argv.features,
      argv.marketValue
    );
    coleccion.agregarFunko(funko);
  })
  .command('list', 'Listar los Funkos de la colección', {
    user: {
      description: 'Nombre del usuario',
      type: 'string',
      demandOption: true
    }
  }, (argv) => {
    coleccion.listarFunkos();
  })
  .command('read', 'Mostrar la información de un Funko', {
    user: { description: 'Nombre del usuario', type: 'string', demandOption: true },
    id: { description: 'ID del Funko', type: 'number', demandOption: true }
  }, (argv) => {
    coleccion.mostrarFunko(argv.id);
  })
  .command('update', 'Modificar un Funko', {
    user: { description: 'Nombre del usuario', type: 'string', demandOption: true },
    id: { description: 'ID del Funko', type: 'number', demandOption: true },
    name: { description: 'Nuevo nombre', type: 'string', demandOption: false },
    desc: { description: 'Nueva descripción', type: 'string', demandOption: false },
    type: { description: 'Nuevo tipo', type: 'string', demandOption: false },
    genre: { description: 'Nuevo género', type: 'string', demandOption: false },
    franchise: { description: 'Nueva franquicia', type: 'string', demandOption: false },
    number: { description: 'Nuevo número identificativo', type: 'number', demandOption: false },
    exclusive: { description: 'Si es exclusivo', type: 'boolean', demandOption: false },
    features: { description: 'Nuevas características especiales', type: 'string', demandOption: false },
    marketValue: { description: 'Nuevo valor de mercado', type: 'number', demandOption: false }
  }, (argv) => {
    const funko = new Funko(
      argv.id,
      argv.name || "",
      argv.desc || "",
      argv.type as TipoFunko,
      argv.genre as GeneroFunko,
      argv.franchise || "",
      argv.number || 0,
      argv.exclusive || false,
      argv.features || "",
      argv.marketValue || 0
    );
    coleccion.modificarFunko(funko);
  })
  .command('remove', 'Eliminar un Funko de la colección', {
    user: { description: 'Nombre del usuario', type: 'string', demandOption: true },
    id: { description: 'ID del Funko', type: 'number', demandOption: true }
  }, (argv) => {
    coleccion.eliminarFunko(argv.id);
  })
  .help()
  .argv;
*/