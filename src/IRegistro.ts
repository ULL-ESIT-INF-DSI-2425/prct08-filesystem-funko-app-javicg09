/**
 * Interfaz que representa un registro meteorológico.
 */
export interface RegistroMeteo {
    fecha: string;
    temperatura: number;
    humedad: number;
    condicion: string;
  }