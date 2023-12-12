import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViajesService {
  private viajes: any[] = []; // Esta es tu lista de viajes

  constructor() {}

  // Agregar un nuevo viaje a la lista
  agregarViaje(nuevoViaje: any) {
    this.viajes.push(nuevoViaje);
  }

  // Obtener la lista de todos los viajes
  obtenerViajes() {
    return this.viajes;
  }
}

