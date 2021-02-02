import { Component, OnInit } from '@angular/core';
import { Cliente, Grupo } from './../cliente..model';
import { ClienteService } from './../cliente.service';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  cliente: Cliente;
  grupo: Grupo[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.cliente = this.clienteService.nuevoCliente();
    this.grupo = this.clienteService.getGrupos();
  }

  nuevoCliente(): void {
    this.clienteService.agregarCliente(this.cliente);
    this.cliente = this.clienteService.nuevoCliente();
  }

}
