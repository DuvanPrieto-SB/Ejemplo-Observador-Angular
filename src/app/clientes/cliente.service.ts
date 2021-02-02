import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cliente, Grupo } from './cliente..model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  private clientes: Cliente[];
  private grupos: Grupo[];
  private clientes$: Subject<Cliente[]> = new Subject<Cliente[]>();

constructor() {
  this.grupos =[
    {
      id: 0,
      nombre:'Sin definir'
    },
    {
      id: 1,
      nombre:'Activos'
    },
    {
      id: 2,
      nombre:'Inactivos'
    },
    {
      id: 3,
      nombre:'Deudores'
    },
  ];
  this.clientes = [];
}

getGrupos(){
  return this.grupos;
}

getClientes$(): Observable<Cliente[]>{
  return this.clientes$.asObservable();
}

agregarCliente(cliente: Cliente) {
  this.clientes.push(cliente);
  this.clientes$.next(this.clientes);
}

nuevoCliente(): Cliente {
  return {
    id: this.clientes.length,
    nombre: '',
    cif: '',
    direccion: '',
    grupo: 0
  };
}

}
